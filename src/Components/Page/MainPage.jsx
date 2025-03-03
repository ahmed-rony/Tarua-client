import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Member_detail from "./Member_detail/Member_detail";
import Play_detail from "./Play_detail/Play_detail";
import Blog_list from "./Blog_list/Blog_list";
import ScrollManager from "../Utils/ScrollManager";
import Event from "./Event/Event";
import Seat_Plan from "./Seat_Plan/Seat_Plan";
import Page404 from "./Page404/Page404";
import Login from "./AuthPage/Login";
import PrivateRoute from "../Utils/Hooks/PrivateRoutes";
import Shows from "../Admin/Page/Shows/Shows";
import Bookings from "../Admin/Page/Bookings/Bookings";
import VerifyCode from "../Admin/Page/VerifyCode/VerifyCode";
import Drama from "../Admin/Page/Drama/Drama";
import News from "../Admin/Page/News/News";
import Dashboard from "../Admin/Page/Dashboard/Dashboard";
import Member from "../Admin/Page/Member/Member";
import MembersList from "./MembersList/MembersList";
import PrivateBookingRoutes from "../Utils/Hooks/PrivateBookingRoutes";

const MainPage = () => {
  return (
    <>
      <Router>
        <ScrollManager smoothScrollDuration={600} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:id" element={<Member_detail />} />
            <Route path="/play/:id" element={<Play_detail />} />
            <Route path="/news" element={<Blog_list />} />
            <Route path="/event" element={<Event />} />
            <Route path="/members" element={<MembersList />} />
            <Route path="/123/admin/login" element={<Login />} />
            <Route path="*" element={<Page404 />} />

            {/* Private Routes For Booking */}
            <Route element={<PrivateBookingRoutes />}>
              <Route path="/event/:showId" element={<Seat_Plan />} />
            </Route>

            {/* Private Routes For Admin */}
            <Route element={<PrivateRoute />}>
              <Route path="/123/admin/dashboard" element={<Dashboard />} />
              <Route path="/123/admin/shows" element={<Shows />} />
              <Route path="/123/admin/member" element={<Member />} />
              <Route path="/123/admin/news" element={<News />} />
              <Route path="/123/admin/dramas" element={<Drama />} />
              <Route path="/123/admin/bookings" element={<Bookings />} />
              <Route path="/123/admin/verify-ticket" element={<VerifyCode />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default MainPage;
