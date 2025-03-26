import "./Banner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { slideImg } from "../../Utils/Datas/News";

const Banner = () => {
  const settings = {
    autoplay: true,
    dots: false,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="banner" >
      <Slider {...settings}>
        {slideImg.map((pic,i) => (
          <div key={i} className="slide_img">
            <img src={pic?.pic} alt="" />
          </div>
        ))}
      </Slider>
      <div className="container">
        <div className="content">
          <div className="left">
            <h1>
              Lorem ipsum <span>dolor</span>,<br/> sit amet consectetur{" "}
              <span>adipisicing</span>.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur velit doloribus et omnis earum enim suscipit neque
              quam? Dolorum aliquam harum laborum fuga eum!
            </p>
          </div>
          <div className="right">
            {/* <img src={img02} className="right_img" alt="banner" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
