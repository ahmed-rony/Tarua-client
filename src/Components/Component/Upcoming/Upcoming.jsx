import { Link } from "react-router-dom";
import "./Upcoming.scss";

const Upcoming = () => {
  return (
    <>
      <div className="container upcoming">
        <div className="title"><h2>Upcoming Events</h2> 
        {/* <div className="line"/><div className="dot"/> */}
        </div>
        <div className="content">
          <div className="item1">
            <div className="date">
              <h4>15</h4>
              <span>May</span>
            </div>
          </div>
          <div className="item2">
            <div className="play">
              <h4>Adam Surot</h4>
              <h5>Drama / Shilpokola Academy Experimental Hall</h5>
            </div>
          </div>
          <div className="item3">
            <div className="info">
            <Link to="/play/1" className="read event_btn">Read More</Link>
            <Link to="/event/1" className="ticket event_btn">Get Ticket</Link>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="item1">
            <div className="date">
              <h4>15</h4>
              <span>May</span>
            </div>
          </div>
          <div className="item2">
            <div className="play">
            <h4>Adam Surot</h4>
              <h5>Drama / Shilpokola Academy Experimental Hall</h5>
            </div>
          </div>
          <div className="item3">
            <div className="info">
            <Link to="/play/1" className="read event_btn">Read More</Link>
            <Link to="/event/1" className="ticket event_btn">Get Ticket</Link>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="item1">
            <div className="date">
              <h4>15</h4>
              <span>May</span>
            </div>
          </div>
          <div className="item2">
            <div className="play">
              <h4>Permission to Speak</h4>
              <h5>Drama / Shilpokola Academy Experimental Hall</h5>
            </div>
          </div>
          <div className="item3">
            <div className="info">
            <Link to="/play/1" className="read event_btn">Read More</Link>
            <Link to="/event/1" className="ticket event_btn">Get Ticket</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
