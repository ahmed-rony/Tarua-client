import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container foo">
        <div className="col">
          <Link href="/" className="logo">
            তাড়ুয়া
          </Link>
          <ul className="nav_list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/blog">Ticket</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
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
          <div className="heading">
            243 Bowery Street <br />
            New York City, <br />
            NY 10002:
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3742976810922!2d90.40227867511457!3d23.734028378681522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f3c71e91f5%3A0x88feb9895abe3a81!2sBangladesh%20Shilpakala%20Academy!5e0!3m2!1sen!2sbd!4v1734620072405!5m2!1sen!2sbd"
            style={{ width: "200px", height: "200px", border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <span className="copyright">&copy;2024 | All rights reserved.</span>
    </div>
  );
};

export default Footer;
