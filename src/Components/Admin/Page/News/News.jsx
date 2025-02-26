import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { BASENDPOINT, UPLOAD_CLOUDINARY } from "../../../../variable";
import CreateNewsContext from "../../../Utils/Reducers/CreateNews_Reducer";

function getMonth(dateProp) {
  const date = new Date(dateProp);
  return date.toLocaleDateString("en-GB", { month: "short" }); // "Feb"
}

function getDateNum(dateProp) {
  const date = new Date(dateProp);
  return date.toLocaleDateString("en-GB", { day: "2-digit" }); // "15"
}
function getShortYear(dateString) {
  const year = new Date(dateString).getFullYear(); // Extract full year (e.g., 2025)
  return year.toString().slice(-2); // Return last two digits of the year
}

const News = () => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [image, setImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { state, dispatch } = useContext(CreateNewsContext);
  // console.log(state);
  

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get("https://tarua-server.onrender.com/api/news");

      if (response.data ) {
        setNews(response.data);
      } else {
        console.warn("Invalid response format:", response.data);
        setNews([]);
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
    fetchNews();
  }, [fetchNews]);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
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
      const formData = new FormData();
      if (image) formData.append("image", image);

      // ✅ Upload images to Cloudinary
      const uploadResponse = await axios.post(
        BASENDPOINT + UPLOAD_CLOUDINARY,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (!uploadResponse.data.image) {
        throw new Error("Image upload successful, but no URLs returned.");
      }

      // ✅ Prepare drama data
      const newsData = {
        ...state,
        image: uploadResponse.data.image,
      };

      console.log(newsData);
      
      // ✅ Send drama data to backend
      const projectResponse = await axios.post(
        BASENDPOINT + "/news/create",
        newsData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      alert("Drama created successfully.");

      dispatch({ type: "RESET_FORM" });
      setImage(null);
      fetchNews();
      setModalOpen(false);
    } catch (error) {
      console.error("Error creating drama:", error);
      alert("Failed to create the drama. Please try again.");
    } finally {
      setLoading(false);
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
                // setSelectedBooking(data);
                setModalOpen(true);
              }}
            >
              Create New News
            </button>
          </div>

          {/* Data Table */}
          <table className="data-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {news?.length > 0 ? (
                news?.map((data, index) => (
                  <tr
                    onScroll={(e) => {
                      const isBottom =
                        e.target.scrollHeight - e.target.scrollTop ===
                        e.target.clientHeight;
                    }}
                    key={index}
                  >
                    <td>{data?.title}</td>
                    <td className="truncate">{data?.description}</td>
                    <td className="truncate">
                      {getMonth(data?.date)} {getDateNum(data?.date)},{" "}
                      {getShortYear(data?.date)}
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
              <h1>Add News</h1>
              <div className="project">
                <div className="left">
                  <div className="item">
                    <label htmlFor="">Title</label>
                    <input
                      name="title"
                      type="text"
                      placeholder="news title"
                      value={state?.title || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">Date</label>
                    <input
                      type="text"
                      name="date"
                      placeholder="e.g. 2000-01-21"
                      value={state?.date || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">News Cover</label>
                    <input type="file" onChange={handleImage} />
                    {image && (
                      <img src={URL.createObjectURL(image)} alt="Preview" />
                    )}
                  </div>
                </div>
                <div className="right">
                  <div className="item">
                    <label htmlFor="">Time</label>
                    <textarea
                      name="description"
                      cols="30"
                      rows="8"
                      placeholder="short description"
                      value={state?.description || ""}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    className="event_btn"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? "Uploading..." : "Create"}
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

export default News;
