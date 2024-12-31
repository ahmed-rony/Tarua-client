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
            <Route path="/event/:id" element={<Seat_Plan />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default MainPage;
