import { Link } from "react-router-dom";
import "./Upcoming.scss";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { getDateNum, getMonth } from "../../Page/Seat_Plan/Seat_Plan";

const Upcoming = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState([]);
  console.log(show);

  const fetchShow = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(`https://tarua-server.onrender.com/api/show`);

      if (response.data?.shows) {
        setShow(response.data?.shows);
      } else {
        console.warn("Invalid response format:", response.data);
        setShow([]);
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
    fetchShow();
  }, [fetchShow]);

  return (
    <>
      <div className="container upcoming">
        <div className="title">
          <h2>Upcoming Events</h2>
          {/* <div className="line"/><div className="dot"/> */}
        </div>
        {show &&
          show?.map((data, index) => (
            <div key={index} className="content">
              <div className="item1">
                <div className="date">
                  <h4>{getDateNum(data?.date) || "00"}</h4>
                  <span>{getMonth(data?.date) || "month"}</span>
                </div>
              </div>
              <div className="item2">
                <div className="play">
                  <h4>{data?.drama?.title}</h4>
                  <h5>
                    Drama / {data?.venue?.name} / {data?.venue?.hall}
                  </h5>
                </div>
              </div>
              <div className="item3">
                <div className="info">
                  <Link
                    to={`/play/${data?.drama?._id}`}
                    className="read event_btn"
                  >
                    Read More
                  </Link>
                  <Link
                    to={`/event/${data?.drama?._id}`}
                    className="ticket event_btn"
                  >
                    Get Ticket
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Upcoming;
