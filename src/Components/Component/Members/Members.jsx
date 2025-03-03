import { Link } from "react-router-dom";
import "./Members.scss";
import img01 from "../../../../public/images/14.jpg";
import img02 from "../../../../public/images/36.jpg";
import img03 from "../../../../public/images/30.jpg";
import img04 from "../../../../public/images/31.jpg";
import { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Members = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="member container">
        <div className="title">
          <h2>Our Team</h2>
        </div>
        <div className="family">
          <div className="col">
            <Link to="/about/1" className="f_link">
              <img src={img01} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img02} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img03} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img04} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img02} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img01} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img04} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img03} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img01} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img04} alt="" />
            </Link>
          </div>
          {/* <div className="col">
          </div>
          <div className="col">
          </div>
          <div className="col">
          </div>
          <div className="col">
          </div> */}
        </div>
        <div className="see_more">
          <Link to="/members" className="event_btn">See More</Link>
        </div>
      </div>
    </>
  );
};

export default Members;
