import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Member_detail from "./Member_detail/Member_detail";
import Play_detail from "./Play_detail/Play_detail";
import Blog_list from "./Blog_list/Blog_list";

const MainPage = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:id" element={<Member_detail />} />
            <Route path="/play/:id" element={<Play_detail />} />
            <Route path="/blog" element={<Blog_list />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default MainPage;
