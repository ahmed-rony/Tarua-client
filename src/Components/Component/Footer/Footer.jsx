import { Link } from "react-router-dom";
import "./Footer.scss";
import MapComponent from "../MapComponent/MapComponent";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container foo">
        <div className="footer_cont">
          <div className="logo_div">
            <Link to="/" className="logo">তাড়ুয়া</Link>
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
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h4 className="heading">Info and Reservations</h4>
                <ul>
                  <li>
                    <img src="/public/images/phone.png" alt="" />{" "}
                    <h5>
                      +01111111111111 <span>+1000000000000</span>
                    </h5>
                  </li>
                  <li>
                    <img src="/public/images/email.png" alt="" />{" "}
                    <h5>
                      abc@gmail.com <span>tarua@gmail.com</span>
                    </h5>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h4 className="heading">Location</h4>
                <ul>
                  <li>
                    Bangladesh Shilpakala Academy, <br />
                    14, 3 Segun Bagicha Rd, <br />
                    Dhaka 1000, Bangladesh
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
      <span className="copyright">&copy;2024 | All rights reserved.</span>
    </div>
  );
};

export default Footer;
