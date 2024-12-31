import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="nav container">
        <Link to="/" className="logo">
          তাড়ুয়া
        </Link>
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
  );
};

export default Nav;
