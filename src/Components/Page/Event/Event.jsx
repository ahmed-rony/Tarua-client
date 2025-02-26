import "./Event.scss";
import img01 from "../../../../public/images/13.jpg";
import img02 from "../../../../public/images/37.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const Event = () => {
  const [loading, setLoading] = useState(false);
  const [shows, setShows] = useState([]);

  console.log(shows);
  const fetchShows = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "https://tarua-server.onrender.com/api/drama/getDramasWithShows"
      );

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

  useEffect(() => {
    fetchShows();
  }, [fetchShows]);

  return (
    <div className="event container">
      <div className="top">
        <h2>Events</h2>
      </div>
      <div className="content">
        {shows?.length > 0 ? (
          shows?.map((data, index) => (
            <div className="event_item" key={index}>
              <div className="item">
                <div className="event_img">
                  <img src={data?.image} alt="event image" />
                </div>
                <h4>
                  {data?.title}
                  <span>{data?.director}</span>
                </h4>
              </div>
              <div className="info">
                <Link to={`/play/${data?._id}`} className="read event_btn">
                  Read More
                </Link>
                <Link to={`/event/${data?._id}`} className="ticket event_btn">
                  Get Ticket
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div> No data found</div>
        )}
      </div>
      
    </div>
  );
};

export default Event;

{
  /* <div className="event_item">
          <div className="item">
            <div className="event_img">
              <img src={img01} alt="event image" />
            </div>
            <h4>
              Adom Surot<span>Bakar Bokul</span>
            </h4>
          </div>
          <div className="info">
            <Link to="/play/1" className="read event_btn">
              Read More
            </Link>
            <Link to="/event/:id" className="ticket event_btn">
              Get Ticket
            </Link>
          </div>
        </div>
        <div className="event_item">
          <div className="item">
            <div className="event_img">
              <img src={img02} alt="event image" />
            </div>
            <h4>
              Harry Potter<span>Chris Columbus</span>
            </h4>
          </div>
          <div className="info">
            <Link to="/play/1" className="read event_btn">
              Read More
            </Link>
            <Link to="/event/:id" className="ticket event_btn">
              Get Ticket
            </Link>
          </div>
        </div> */
}
