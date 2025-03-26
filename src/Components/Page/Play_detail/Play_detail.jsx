import "./Play_detail.scss";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { getDateNum, getMonth } from "../Seat_Plan/Seat_Plan";
import { BASENDPOINT } from "../../../variable";

const Play_detail = () => {
  const [loading, setLoading] = useState(false);
  const [drama, setDrama] = useState([]);
  const { id } = useParams();
  // console.log(drama);

  const fetchDrama = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        BASENDPOINT + `/drama/${id}`
      );

      if (response.data?.drama) {
        setDrama(response.data?.drama);
      } else {
        console.warn("Invalid response format:", response.data);
        setDrama([]);
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
  }, [fetchDrama]);

  return (
    <div className="play_detail member_detail">
      <div className="top">
        <h2>{drama?.title}</h2>
        <h6>About Play</h6>
      </div>
      <div className="container">
        <div className="middle">
          <div className="event_img">
            <img src={drama?.image} alt="event image" />
          </div>
          {drama?.shows?.length > 0 && <div className="item1">
            {drama?.shows?.length > 0 &&
              drama?.shows?.[0]?.dates?.map((date, index) => (
                <div key={index} className="date">
                  <h4>{getDateNum(date) || "00"}</h4>
                  <span>{getMonth(date) || "month"}</span>
                </div>
              ))}
          </div>}
        </div>
        <div className="content">
          <div className="left">
            <div className="item">
              <h5 className="post">Director</h5>
              <ul>
                {drama?.director?.map((d, index) => (
                  <li key={index}>
                    <Link to={`/about/${d?.id}`}>{d?.name}</Link>
                    {index < drama?.director?.length - 1 && ", "}
                  </li>
                ))}
              </ul>
            </div>
            <div className="item">
              <h5 className="post">design</h5>
              <ul>
                {drama?.designers?.map((d, index) => (
                  <li key={index}>
                    <Link to={`/about/${d?.id}`}>{d?.name}</Link>
                    {index < drama?.designers?.length - 1 && ", "}
                  </li>
                ))}
              </ul>
            </div>
            <div className="item">
              <h5 className="post">actors</h5>
              <ul>
                {drama?.actors?.map((a, index) => (
                  <li key={index}>
                    <Link to={`/about/${a?.id}`}>{a?.name}</Link>
                    {index < drama?.actors?.length - 1 && ", "}
                  </li>
                ))}
              </ul>
            </div>
            <div className="item">
              <h5 className="post">Moments</h5>
              <div className="gallery">
                <div className="item_card">
                  <PhotoProvider maskOpacity={0.5}>
                    <div className="foo">
                      {drama?.dramaPics?.map((item, index) => (
                        <PhotoView key={index} src={item}>
                          <img src={item} alt="" />
                        </PhotoView>
                      ))}
                    </div>
                  </PhotoProvider>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="detail_about">
              <h5 className="detail_header">About</h5>
              {drama?.description?.map((d, index) => (
                <p key={index}>{d}</p>
              ))}
            </div>
            <div className="detail_about">
              <h5 className="detail_header">Director's Word</h5>
              <p>{drama?.directorsWord}</p>
            </div>
            <div className="award">
              {drama?.mediaAwards?.length > 0 && <h5 className="detail_header">Media & Awards</h5>}
              {drama?.mediaAwards &&
                drama?.mediaAwards?.map((d, index) => (
                  <div key={index} className="item">
                    <div className="title">
                      <h2>{d?.year}</h2> <div className="line" />
                      <div className="dot" />
                    </div>
                    <div className="desc">
                      <div className="left_item"></div>
                      <div className="right_item">
                        <p>{d?.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="upcoming">
          {drama?.shows &&
            drama?.shows?.map((a, index) => (
              <div key={index}>
                <div className="content">
                  <div className="item1">
                    {a?.dates &&
                      a?.dates?.map((date, index) => (
                        <div key={index} className="date">
                          <h4>{getDateNum(date) || "00"}</h4>
                          <span>{getMonth(date) || "month"}</span>
                        </div>
                      ))}
                  </div>
                  <div className="item2">
                    <div className="play">
                      <h4>{drama?.title}</h4>
                      <h5>
                        Drama / {a?.venueName} / {a?.hall}
                      </h5>
                    </div>
                  </div>
                  <div className="item3">
                    <div className="info">
                      <Link
                        to={`/event/${drama?.id}`}
                        className="ticket event_btn"
                      >
                        Get Ticket
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="content content_mbl">
                  <div className="top">
                    <div className="item1">
                      {a?.dates &&
                        a?.dates?.map((date, index) => (
                          <div key={index} className="date">
                            <h4>{getDateNum(date) || "00"}</h4>
                            <span>{getMonth(date) || "month"}</span>
                          </div>
                        ))}
                    </div>
                    <div className="item2">
                      <div className="play">
                        <h4>{drama?.title}</h4>
                        <h5>
                          Drama / {a?.venueName} / {a?.hall}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="item3">
                    <div className="info">
                      <Link
                        to={`/event/${drama?.id}`}
                        className="ticket event_btn"
                      >
                        Get Ticket
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Play_detail;
