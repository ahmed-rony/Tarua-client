import About_Sec from "../../Component/About_Sec/About_Sec";
import Banner from "../../Component/Banner/Banner";
import Members from "../../Component/Members/Members";
import Miss from "../../Component/Miss/Miss";
import Play_sec from "../../Component/Play_sec/Play_sec";
import Upcoming from "../../Component/Upcoming/Upcoming";
// import Premiere from "../../Component/Premiere/Premiere";k
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Banner />
      </div>
      <About_Sec />
      <Play_sec />
      <Upcoming />
      <Members />
      <Miss />
      <div className="container">{/* <Premiere /> */}</div>
    </div>
  );
};

export default Home;
