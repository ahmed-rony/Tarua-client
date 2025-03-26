import { Link } from "react-router-dom";
import "./Nav.scss";
import { FaBarsProgress } from "react-icons/fa6";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
import img01 from "/images/logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="navbar">
        <div className="nav container">
          <div className="logo_sec">
            <Link to="/" className="logo">
              {/* তাড়ুয়া */}
              <img src={img01} alt="" />
            </Link>
            <FaBarsProgress
              className="menu_icon"
              onClick={() => toggleDrawer()}
            />
          </div>
          <ul className="nav_list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/event">Ticket</Link>
            </li>
          </ul>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="menu_modal"
        overlayOpacity="0.5"
      >
        <div className="menu_content">
          <ul className="nav_list">
            <li>
              <Link to="/" onClick={() => toggleDrawer()}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => toggleDrawer()}>About</Link>
            </li>
            <li>
              <Link to="/news" onClick={() => toggleDrawer()}>News</Link>
            </li>
            <li>
              <Link to="/event" onClick={() => toggleDrawer()}>Ticket</Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default Nav;
