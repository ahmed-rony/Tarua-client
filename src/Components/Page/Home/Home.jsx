import About_Sec from "../../Component/About_Sec/About_Sec";
import Banner from "../../Component/Banner/Banner";
import Members from "../../Component/Members/Members";
import Play_sec from "../../Component/Play_sec/Play_sec";
import Upcoming from "../../Component/Upcoming/Upcoming";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <About_Sec />
      <Play_sec />
      <Upcoming />
      <Members />
    </div>
  );
};

export default Home;
