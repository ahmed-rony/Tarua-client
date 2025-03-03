import { Link } from "react-router-dom";
import "./Upcoming.scss";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { getDateNum, getMonth } from "../../Page/Seat_Plan/Seat_Plan";
import { BASENDPOINT } from "../../../variable";

const Upcoming = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState([]);
  // console.log(show);

  const fetchShow = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(BASENDPOINT + `/show`);

      if (response.data?.dramas) {
        setShow(response.data?.dramas);
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
          show?.map((datas) =>
            datas?.shows?.map((data, index) => (
              <div key={index}>
                <div className="content">
                  <div className="item1">
                    {data?.dates &&
                      data?.dates?.map((date, index) => (
                        <div key={index} className="date">
                          <h4>{getDateNum(date?.date) || "00"}</h4>
                          <span>{getMonth(date?.date) || "month"}</span>
                        </div>
                      ))}
                  </div>
                  <div className="item2">
                    <div className="play">
                      <h4>{datas?.dramaTitle}</h4>
                      <h5>
                        Drama / {data?.venueName} / {data?.hall}
                      </h5>
                    </div>
                  </div>
                  <div className="item3">
                    <div className="info">
                      <Link
                        to={`/play/${datas?.dramaId}`}
                        className="read event_btn"
                      >
                        Read More
                      </Link>
                      <Link
                        to={`/event/${datas?.dramaId}`}
                        className="ticket event_btn"
                      >
                        Get Ticket
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="content_mbl">
                  <div className="top">
                    <div className="item1">
                      {data?.dates &&
                        data?.dates?.map((date, index) => (
                          <div key={index} className="date">
                            <h4>{getDateNum(date?.date) || "00"}</h4>
                            <span>{getMonth(date?.date) || "month"}</span>
                          </div>
                        ))}
                    </div>
                    <div className="item2">
                      <div className="play">
                        <h4>{datas?.dramaTitle}</h4>
                        <h5>
                          Drama / {data?.venueName} / {data?.hall}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="item3">
                    <div className="info">
                      <Link
                        to={`/play/${datas?.dramaId}`}
                        className="read event_btn"
                      >
                        Read More
                      </Link>
                      <Link
                        to={`/event/${datas?.dramaId}`}
                        className="ticket event_btn"
                      >
                        Get Ticket
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
      </div>
    </>
  );
};

export default Upcoming;
