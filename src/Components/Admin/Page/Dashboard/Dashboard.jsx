import "./Dashboard.scss";
import { LuTicket } from "react-icons/lu";
import { PiSlideshowBold } from "react-icons/pi";
import { GiDramaMasks } from "react-icons/gi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { IoTicketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container dashboard">
      <div className="content">
        <div className="tops">
          <Link to="/123/admin/dramas" className="item">
            <GiDramaMasks className="icon01" />
            <span>Drama</span>
          </Link>
          <Link to="/123/admin/bookings" className="item">
            <LuTicket className="icon01" />
            <span>Bookings</span>
          </Link>
          <Link to="/123/admin/shows" className="item">
            <PiSlideshowBold className="icon01" />
            <span>Shows</span>
          </Link>
        </div>
        <div className="bottom">
          <Link to="/123/admin/news" className="item">
            <HiOutlineNewspaper className="icon01" />
            <span>News</span>
          </Link>
          <Link to="/123/admin/verify-ticket" className="item">
            <IoTicketOutline className="icon01" />
            <span>Verify Ticket</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
