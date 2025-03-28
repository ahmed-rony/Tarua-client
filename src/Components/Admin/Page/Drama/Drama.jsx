import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import CreateShowContext from "../../../Utils/Reducers/CreateShow_Reducer";
import CreateDramaContext from "../../../Utils/Reducers/CreateDrama_Reducer";
import { BASENDPOINT, UPLOAD_CLOUDINARY } from "../../../../variable";

const Drama = () => {
  const [loading, setLoading] = useState(false);
  const [drama, setDrama] = useState([]);
  const [info, setInfo] = useState([]);
  const [image, setImage] = useState(null);
  const [files, setFiles] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { state, dispatch } = useContext(CreateDramaContext);
  

  const fetchDrama = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(BASENDPOINT + `/drama/getAllDramas`);

      if (response.data) {
        setDrama(response.data);
      } else {
        console.warn("Invalid response format:", response.data);
        setDrama([]);
      }
    } catch (error) {
      console.error(
        "Error fetching Drama:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchMemberDetails = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(BASENDPOINT + `/member/get-member`);

      if (response.data) {
        setInfo(response.data);
      } else {
        console.warn("Invalid response format:", response.data);
        setInfo([]);
      }
    } catch (error) {
      console.error(
        "Error fetching shows:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDrama();
    fetchMemberDetails();
  }, [fetchDrama, fetchMemberDetails]);

  const handleChange = (e, index = null, field = null) => {
    const { name, value } = e.target;

    if (name === "description") {
      const transformedArray = value
        .split(/\n+/)
        .filter((line) => line.trim() !== "");

      dispatch({
        type: "UPDATE_FIELD",
        payload: {
          field: name,
          rawField: `raw${name.charAt(0).toUpperCase() + name.slice(1)}`,
          data: transformedArray,
          rawData: value,
        },
      });
    } else if (
      name === "actors" ||
      name === "designers" ||
      name === "director"
    ) {
      const selectedItem = {
        id: value,
        name: e.target.selectedOptions[0]?.text,
      };

      dispatch({
        type: "TOGGLE_SELECTION",
        payload: { field: name, item: selectedItem },
      });
    } else if (index !== null && field) {
      // Handles media awards update
      dispatch({
        type: "UPDATE_MEDIA_AWARD",
        payload: {
          index,
          field,
          value,
        },
      });
    } else {
      dispatch({ type: "CHANGE_INPUT", payload: { name, value } });
    }
  };

  const handleImageUpload = (e) => {
    const fileList = Array.from(e.target.files);
    if (fileList?.length > 0) {
      setFiles(fileList);
    } else {
      console.error("No files selected");
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    } else {
      console.error("No file selected");
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      let uploadedImageUrl = state.image; // Default to existing image
      let uploadedDramaPics = state.dramaPics || []; // Default to existing dramaPics

      const formData = new FormData();
      if (image) formData.append("image", image);
      files.forEach((file) => formData.append("dramaPics", file));

      // ✅ Upload only if new images are provided
      if (image || files.length > 0) {
        const uploadResponse = await axios.post(
          BASENDPOINT + UPLOAD_CLOUDINARY,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        if (
          !uploadResponse.data.image &&
          !uploadResponse.data.dramaPics?.length
        ) {
          throw new Error("Image upload successful, but no URLs returned.");
        }

        // Update only if new images were uploaded
        uploadedImageUrl = uploadResponse.data.image || state.image;
        uploadedDramaPics = uploadResponse.data.dramaPics || state.dramaPics;
      }

      // ✅ Prepare drama data
      const dramaData = {
        ...state,
        image: uploadedImageUrl,
        dramaPics: uploadedDramaPics,
      };

      // ✅ Update or create drama
      const projectResponse = editMode
        ? await axios.patch(
            `${BASENDPOINT}/drama/update/${state._id}`,
            dramaData
          )
        : await axios.post(`${BASENDPOINT}/drama/create`, dramaData);

      alert(
        editMode ? "Drama updated successfully." : "Drama created successfully."
      );

      dispatch({ type: "RESET_FORM" });
      setImage(null);
      setFiles([]);
      fetchDrama();
      setModalOpen(false);
    } catch (error) {
      console.error("Error submitting drama:", error);
      alert("Failed to submit the drama. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (drama) => {
    dispatch({ type: "SET_EDIT_DRAMA", payload: drama });
    setEditMode(true);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this drama?")) return;
    try {
      await axios.delete(`${BASENDPOINT}/drama/delete/${id}`);
      alert("Drama deleted successfully.");
      fetchDrama();
    } catch (error) {
      console.error("Error deleting drama:", error);
    }
  };

  return (
    <>
      <div className="archive">
        <div className="container">
          <div className="top_head">
            <div className="title">
              <h2>Drama</h2>
            </div>
            <button
              className="event_btn"
              onClick={() => {
                // setSelectedBooking(data);
                setModalOpen(true);
              }}
            >
              Create New Drama
            </button>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Drama</th>
                <th>Director</th>
                <th>Shows</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {drama?.length > 0 ? (
                drama?.map((data, index) => (
                  <tr
                    onScroll={(e) => {
                      const isBottom =
                        e.target.scrollHeight - e.target.scrollTop ===
                        e.target.clientHeight;
                    }}
                    key={index}
                  >
                    <td className="truncate">{data?.title}</td>
                    <td className="truncate">
                      {data?.director?.map((d, i) => (
                        <div key={i}>
                          <span >{d.name}</span>
                          {i < data?.director?.length - 1 && ", "}
                        </div>
                      ))}
                    </td>
                    <td className="truncate">{data?.shows?.length}</td>
                    <td>
                      <button
                        className="event_btn edit"
                        onClick={() => handleEdit(data)}
                      >
                        Edit
                      </button>
                      <button
                        className="event_btn delete"
                        onClick={() => handleDelete(data?._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No results found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {modalOpen && (
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} center>
          <div className="new_project">
            <div>
              <h1>Add Drama</h1>
              <div className="project">
                <div className="left">
                  <div className="item">
                    <label htmlFor="">Drama Name</label>
                    <input
                      name="title"
                      type="text"
                      placeholder="drama name"
                      value={state?.title || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="item">
                    <label>Director</label>
                    <select name="director" onChange={handleChange} value="">
                      <option value="" disabled>
                        Choose A Director
                      </option>
                      {info?.map((data) => (
                        <option key={data._id} value={data._id}>
                          {data.name}
                        </option>
                      ))}
                    </select>

                    {/* Display selected actors */}
                    <div className="selected-items">
                      <div className="selected-item">
                        {state.director.map((item) => (
                          <button
                            key={item.id}
                            className="event_btn"
                            onClick={() =>
                              dispatch({
                                type: "TOGGLE_SELECTION",
                                payload: { field: "director", item },
                              })
                            }
                          >
                            {item.name} ❌
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <label htmlFor="">Director's Word</label>
                    <textarea
                      name="directorsWord"
                      cols="30"
                      rows="4"
                      placeholder="director's view"
                      value={state?.directorsWord || ""}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="item">
                    <label htmlFor="">Drama Cover</label>
                    <input type="file" onChange={handleImage} />
                    {image && (
                      <img src={URL.createObjectURL(image)} alt="Preview" />
                    )}
                  </div>
                  <div className="item">
                    <label htmlFor="">Drama Images</label>
                    <input type="file" multiple onChange={handleImageUpload} />
                    <div className="project_images">
                      {files &&
                        files?.map((url, i) => (
                          <img
                            key={i}
                            src={URL.createObjectURL(url)}
                            alt="Preview"
                          />
                        ))}
                    </div>
                  </div>
                  <div className="item">
                    <label htmlFor="">Media Awards</label>
                    {state?.mediaAwards?.map((award, index) => (
                      <div key={index} className="media-award">
                        <input
                          type="number"
                          placeholder="Year"
                          value={award?.year || ""}
                          onChange={(e) => handleChange(e, index, "year")}
                        />
                        <input
                          type="text"
                          placeholder="Award Description"
                          value={award?.description || ""}
                          onChange={(e) =>
                            handleChange(e, index, "description")
                          }
                        />
                        <button
                          className="event_btn"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_MEDIA_AWARD",
                              payload: index,
                            })
                          }
                        >
                          ❌ Remove
                        </button>
                      </div>
                    ))}
                    <button
                      className="event_btn"
                      onClick={() => dispatch({ type: "ADD_MEDIA_AWARD" })}
                    >
                      ➕ Add Award
                    </button>
                  </div>
                </div>
                <div className="right">
                  <div className="item">
                    <label>Actors</label>
                    <select name="actors" onChange={handleChange} value="">
                      <option value="" disabled>
                        Choose An Actor
                      </option>
                      {info?.map((data) => (
                        <option key={data._id} value={data._id}>
                          {data.name}
                        </option>
                      ))}
                    </select>

                    {/* Display selected actors */}
                    <div className="selected-items">
                      <div className="selected-item">
                        {state.actors.map((item) => (
                          <button
                            key={item.id}
                            className="event_btn"
                            onClick={() =>
                              dispatch({
                                type: "TOGGLE_SELECTION",
                                payload: { field: "actors", item },
                              })
                            }
                          >
                            {item.name} ❌
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <label>Designers</label>
                    <select name="designers" onChange={handleChange} value="">
                      <option value="" disabled>
                        Choose A Designer
                      </option>
                      {info?.map((data) => (
                        <option key={data._id} value={data._id}>
                          {data.name}
                        </option>
                      ))}
                    </select>

                    {/* Display selected actors */}
                    {state?.designers?.length > 0 && (
                      <div className="selected-items">
                        <div className="selected-item">
                          {state.designers.map((item) => (
                            <button
                              key={item.id}
                              className="event_btn"
                              onClick={() =>
                                dispatch({
                                  type: "TOGGLE_SELECTION",
                                  payload: { field: "designers", item },
                                })
                              }
                            >
                              {item.name} ❌
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="item">
                    <label htmlFor="">Description</label>
                    <textarea
                      name="description"
                      cols="30"
                      rows="6"
                      placeholder="description (line break for multiple pera)"
                      value={state?.rawDescription}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    className="event_btn"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? "Processing..." : editMode ? "Update" : "Create"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Drama;
