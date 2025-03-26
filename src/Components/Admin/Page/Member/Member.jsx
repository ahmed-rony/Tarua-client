import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import CreateMemberContext from "../../../Utils/Reducers/CreateMember_Reducer";
import { BASENDPOINT, UPLOAD_CLOUDINARY } from "../../../../variable";

const Member = () => {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const { state, dispatch } = useContext(CreateMemberContext);
  const [image, setImage] = useState(null);
  

  const fetchMembers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASENDPOINT}/member`);
      setMembers(response.data || []);
    } catch (error) {
      console.error("Error fetching Members:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  const handleChange = (e, index = null, field = null) => {
    const { name, value } = e.target;

    if (name === "description" || name === "performance" || name === "role") {
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
    } else if (field && index !== null) {
      dispatch({
        type: "UPDATE_MEDIA_AWARD",
        payload: { index, field, value },
      });
    } else {
      dispatch({ type: "CHANGE_INPUT", payload: { name, value } });
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

      // ✅ Only upload if a new image is provided
      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        const uploadResponse = await axios.post(
          BASENDPOINT + UPLOAD_CLOUDINARY,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        if (!uploadResponse.data.image) {
          throw new Error("Image upload successful, but no URLs returned.");
        }

        uploadedImageUrl = uploadResponse.data.image; // Update with new image
      }

      // ✅ Prepare member data
      const memberData = {
        ...state,
        image: uploadedImageUrl || state.image,
      };

      // ✅ Update or create member
      const response = editMode
        ? await axios.patch(
            `${BASENDPOINT}/member/update/${state._id}`,
            memberData
          )
        : await axios.post(`${BASENDPOINT}/member/create`, memberData);

      alert(
        editMode
          ? "Member updated successfully."
          : "Member created successfully."
      );

      dispatch({ type: "RESET_FORM" });
      setImage(null);
      fetchMembers();
      setModalOpen(false);
    } catch (error) {
      console.error("Error submitting member:", error);
      alert("Failed to submit the member. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (member) => {
    dispatch({ type: "SET_EDIT_MEMBER", payload: member });
    setEditMode(true);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this member?")) return;
    try {
      await axios.delete(`${BASENDPOINT}/member/delete/${id}`);
      alert("Member deleted successfully.");
      fetchMembers();
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };

  return (
    <>
      <div className="archive">
        <div className="container">
          <div className="top_head">
            <div className="title">
              <h2>Members</h2>
            </div>
            <button className="event_btn" onClick={() => setModalOpen(true)}>
              Create New Member
            </button>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {members?.length > 0 ? (
                members?.map((member, index) => (
                  <tr key={index}>
                    <td className="truncate" title={member?.name}>
                      {member?.name}
                    </td>
                    <td className="truncate" title={member?.phone}>
                      {member?.phone}
                    </td>
                    <td>
                      <button
                        className="event_btn edit"
                        onClick={() => handleEdit(member)}
                      >
                        Edit
                      </button>
                      <button
                        className="event_btn delete"
                        onClick={() => handleDelete(member?._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No members found</td>
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
              <h1>Add Member</h1>
              <div className="project">
                <div className="left">
                  <div className="item">
                    <label htmlFor="">Name</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="member name"
                      value={state?.name || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">Email</label>
                    <input
                      name="email"
                      type="text"
                      placeholder="abc@gmail.com"
                      value={state?.email || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">Phone Number</label>
                    <input
                      name="phone"
                      type="text"
                      placeholder="+0123..."
                      value={state?.phone || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">Member Image</label>
                    <input type="file" onChange={handleImage} />
                    {image && (
                      <img src={URL.createObjectURL(image)} alt="Preview" />
                    )}
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
                    <label htmlFor="">Performance</label>
                    <textarea
                      name="performance"
                      cols="30"
                      rows="6"
                      placeholder="line break for multiple inputs"
                      value={state?.rawPerformance || ""}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="item">
                    <label htmlFor="">Roles</label>
                    <textarea
                      name="role"
                      cols="30"
                      rows="6"
                      placeholder="line break for multiple inputs"
                      value={state?.rawRole || ""}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="item">
                    <label htmlFor="">Description</label>
                    <textarea
                      name="description"
                      cols="30"
                      rows="6"
                      placeholder="line break for multiple inputs"
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

export default Member;
