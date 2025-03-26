import { Link } from "react-router-dom";
import "./Footer.scss";
import MapComponent from "../MapComponent/MapComponent";
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import img01 from "/images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container foo">
        <div className="footer_cont">
          <div className="logo_div">
            {/* <Link to="/" className="logo">
              তাড়ুয়া
            </Link> */}
            <Link to="/" className="logo">
              {/* তাড়ুয়া */}
              <img src={img01} alt="" />
            </Link>
          </div>
          <div className="footer_con">
            <div className="left">
              <div className="col">
                <h4 className="heading">Navigation</h4>
                <ul className="nav_list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/blog">Ticket</Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h4 className="heading">Info and Reservations</h4>
                <ul>
                  <li>
                    <FaPhone className="icon" />
                    <h5>
                      +8801648391826 <span>+8801866291779</span>
                    </h5>
                  </li>
                  <li>
                    <MdMail className="icon" /> <h5>tarua.stage@gmail.com</h5>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h4 className="heading">Location</h4>
                <ul>
                  <li>
                    Novoday Sports Club,
                    <br /> 4 Tajmahal Rd, Dhaka 1207
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="col">
                <ul>
                  <li>
                    <MapComponent />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="copyright">&copy;2025 | All rights reserved.</span>
    </div>
  );
};

export default Footer;
