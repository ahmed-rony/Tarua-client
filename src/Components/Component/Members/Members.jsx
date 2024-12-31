import { Link } from "react-router-dom";
import "./Members.scss";
import img01 from "../../../../public/images/14.jpg";
import img02 from "../../../../public/images/36.jpg";
import img03 from "../../../../public/images/30.jpg";
import img04 from "../../../../public/images/31.jpg";

const Members = () => {
  return (
    <div className="member container">
      {/* <div className="owner">
        <div className="content">
          <img src="/public/images/17.jpg" alt="" />
          <h4>
            Samantha Moon <span>Founder</span>
          </h4>
        </div>
        <div className="content">
          <img src="/public/images/32.jpg" alt="" />
          <h4>
            Bakar Bokul <span>Director</span>
          </h4>
        </div>
      </div> */}
      <div className="title">
        <h2>Our Team</h2>
        {/* <div className="line" />
        <div className="dot" /> */}
      </div>
      <div className="family">
        <div className="col">
          <Link to="/about/1" className="f_link">
            <img src={img01} alt="" />
          </Link>
          <Link to="/about/1" className="f_link">
            <img src={img02} alt="" />
          </Link>
        </div>
        <div className="col">
          <Link to="/about/1" className="f_link">
            <img src={img03} alt="" />
          </Link>
          <Link to="/about/1" className="f_link">
            <img src={img04} alt="" />
          </Link>
        </div>
        <div className="col">
          <Link to="/about/1" className="f_link">
            <img src={img02} alt="" />
          </Link>
          <Link to="/about/1" className="f_link">
            <img src={img01} alt="" />
          </Link>
        </div>
        <div className="col">
          <Link to="/about/1" className="f_link">
            <img src={img04} alt="" />
          </Link>
          <Link to="/about/1" className="f_link">
            <img src={img03} alt="" />
          </Link>
        </div>
        <div className="col">
          <Link to="/about/1" className="f_link">
            <img src={img01} alt="" />
          </Link>
          <Link to="/about/1" className="f_link">
            <img src={img04} alt="" />
          </Link>
        </div>
      </div>
      <div className="see_more">
        <button className="event_btn">See More</button>
      </div>
    </div>
  );
};
{
  /* <div className="row">
  <Link
    to="/"
    className="item item01"
    style={{ backgroundImage: `url(${img01})` }}
  ></Link>
  <Link
    to="/"
    className="item item02"
    style={{ backgroundImage: `url(${img02})` }}
  ></Link>
  <Link
    to="/"
    className="item item03"
    style={{ backgroundImage: `url(${img04})` }}
  ></Link>
</div> */
}

export default Members;
