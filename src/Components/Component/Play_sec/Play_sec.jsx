import "./Play_sec.scss";
import img01 from "../../../../public/images/01.jpg";
import img001 from "../../../../public/images/3.jpg";
import img02 from "../../../../public/images/05.jpg";
import img03 from "../../../../public/images/37.jpg";
import img04 from "../../../../public/images/38.jpg";
import img06 from "../../../../public/images/39.jpg";
import { Link } from "react-router-dom";

const Play_sec = () => {
  return (
    <div className="play_sec container">
      <div className="title">
        <h2>Our Productions</h2>
        {/* <div className="line"/><div className="dot"/> */}
      </div>
      <div className="row">
        <Link to="/play/1" className="left hvr" style={{ backgroundImage: `url(${img01})` }}>
          <div className="info">
            <h4>
              Adom Surot <span>Drama</span>
            </h4>
          </div>
        </Link>
        <Link to="/play/2" className="left hvr" style={{ backgroundImage: `url(${img03})` }}>
          <div className="info">
            <h4>
              Lorem ipsum <span>Dance</span>
            </h4>
          </div>
        </Link>
        <Link to="/play/3" className="left hvr" style={{ backgroundImage: `url(${img02})` }}>
          <div className="info">
            <h4>
              Lorem ipsum <span>Show</span>
            </h4>
          </div>
        </Link>
        {/* <div className="right">
          <div className="item hvr" style={{ backgroundImage: `url(${img06})` }}>
            <div className="info">
              <h4>
                Bakar Bokul <span>Director</span>
              </h4>
            </div>
          </div>
          <div className="item hvr" style={{ backgroundImage: `url(${img001})` }}>
            <div className="info">
              <h4>
                Bakar Bokul <span>Director</span>
              </h4>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="row">
        <div className="right">
          <div className="item hvr" style={{ backgroundImage: `url(${img04})` }}>
            <div className="info">
              <h4>
                Bakar Bokul <span>Director</span>
              </h4>
            </div>
          </div>
          <div className="item hvr" style={{ backgroundImage: `url(${img03})` }}>
            <div className="info">
              <h4>
                Bakar Bokul <span>Director</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="left hvr" style={{ backgroundImage: `url(${img02})` }}>
          <div className="info">
            <h4>
              Bakar Bokul <span>Director</span>
            </h4>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Play_sec;
