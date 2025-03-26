import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Shows.scss";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import CreateShowContext from "../../../Utils/Reducers/CreateShow_Reducer";
import { BASENDPOINT } from "../../../../variable";
import { getDateNum, getFormattedDate } from "../../../Page/Seat_Plan/Seat_Plan";




const Shows = () => {
  const [loading, setLoading] = useState(false);
  const [shows, setShows] = useState([]);
  const [info, setInfo] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { state, dispatch } = useContext(CreateShowContext);
  const { dramaId, venueId, maxCapacity, date, time } = state;

  const fetchShows = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(BASENDPOINT + `/show/get-shows`);

      if (response.data && Array.isArray(response.data)) {
        setShows(response.data);
      } else {
        console.warn("Invalid response format:", response.data);
        setShows([]);
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

  const fetchCreateDetails = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(BASENDPOINT + `/show/create-detail`);

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
    fetchShows(); // Call it when the component mounts
    fetchCreateDetails();
  }, [fetchShows, fetchCreateDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "time") {
      // Update rawDesc and transform into array for desc
      const timeArray = value.split(/\n+/).filter((line) => line.trim() !== "");
      dispatch({ type: "UPDATE_TIME", payload: { rawTime: value, timeArray } });
    } else {
      dispatch({ type: "CHANGE_INPUT", payload: { name, value } });
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      // ✅ Prepare show data
      const showData = {
        dramaId: dramaId || state.dramaId,
        venueId: venueId || state.venueId,
        maxCapacity: maxCapacity || state.maxCapacity,
        date: date || state.date,
        time: time || state.time,
      };
      console.log("showdata",state._id);
      

      // ✅ Determine whether to update or create a show
      if (editMode) {
        await axios.patch(`${BASENDPOINT}/show/update/${state._id}`, showData, {
          headers: { "Content-Type": "application/json" },
        });
        alert("Show updated successfully.");
      } else {
        await axios.post(`${BASENDPOINT}/show/create`, showData, {
          headers: { "Content-Type": "application/json" },
        });
        alert("Show created successfully.");
      }

      dispatch({ type: "RESET_FORM" });
      fetchShows();
      setModalOpen(false);
    } catch (error) {
      console.error("Error submitting show:", error);
      alert("Failed to submit the show. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (show) => {
    const formattedDate = getFormattedDate(show?.date);
  
    const shows = {
      ...show, // Spread first to avoid overriding other properties
      date: formattedDate, // Override the date to be in YYYY-MM-DD format
    };
  
    dispatch({ type: "SET_EDIT_SHOW", payload: shows });
    setEditMode(true);
    setModalOpen(true);
  };
  

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this show?")) return;
    try {
      await axios.delete(`${BASENDPOINT}/show/delete/${id}`);
      alert("Show deleted successfully.");
      fetchShows();
    } catch (error) {
      console.error("Error deleting show:", error);
    }
  };

  return (
    <>
      <div className="archive">
        <div className="container">
          <div className="top_head">
            <div className="title">
              <h2>Shows</h2>
            </div>
            <button
              className="event_btn"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Create New Show
            </button>
          </div>

          {/* Data Table */}
          <table className="data-table">
            <thead>
              <tr>
                <th>Drama</th>
                <th>Venue</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {shows?.length > 0 ? (
                shows?.map((data,i) =>
                    <tr
                      onScroll={(e) => {
                        const isBottom =
                          e.target.scrollHeight - e.target.scrollTop ===
                          e.target.clientHeight;
                      }}
                      key={i}
                    >
                      <td className="truncate" title={data?.dramaTitle}>
                        {data?.dramaTitle}
                      </td>

                      <td className="truncate" title={data?.venueName}>
                        {data?.venueName}
                      </td>
                      <td className="truncate">
                          <span className="row_date">
                            {getDateNum(data?.date)}
                          </span>
                      </td>
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
                )
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
              <h1>Add Show</h1>
              <div className="project">
                <div className="left">
                  <div className="item">
                    <label htmlFor="">Drama</label>
                    <select
                      name="dramaId"
                      value={state?.dramaId}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Choose a drama
                      </option>
                      {info?.dramas?.map((data, index) => (
                        <option key={index} value={data?._id}>
                          {data?.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="item">
                    <label htmlFor="">Venue</label>
                    <select
                      name="venueId"
                      value={state?.venueId}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Choose a venue
                      </option>
                      {info?.venues?.map((data, index) => (
                        <option key={index} value={data?._id}>
                          {data?.name}, {data?.hall}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="item">
                    <label htmlFor="">Max Capacity</label>
                    <input
                      name="maxCapacity"
                      type="number"
                      placeholder="Seat capacity"
                      value={state?.maxCapacity}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="right">
                  <div className="item">
                    <label htmlFor="">Date</label>
                    <input
                      type="text"
                      name="date"
                      placeholder="e.g. 2000-01-21"
                      value={state?.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">Time</label>
                    <textarea
                      name="time"
                      cols="30"
                      rows="8"
                      placeholder="e.g. 10:00 (line break for more time entry)"
                      value={state?.rawTime}
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

export default Shows;
