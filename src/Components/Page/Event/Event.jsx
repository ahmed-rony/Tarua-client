import "./Event.scss";
import img01 from "../../../../public/images/13.jpg";
import img02 from "../../../../public/images/37.jpg";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <div className="event container">
        <div className="top">
        <h2>Events</h2>
      </div>
      <div className="content">
        <div className="event_item">
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
        </div>
      </div>
    </div>
  );
};

export default Event;
