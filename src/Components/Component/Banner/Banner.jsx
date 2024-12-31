import "./Banner.scss";
import img02 from "/images/43.jpg";

const Banner = () => {
  return (
    <div className="banner"  style={{ backgroundImage: `url(${img02})` }}>
      <div className="container">
        <div className="content">
          <div className="left">
            <h1>
              Lorem ipsum <span>dolor</span>, sit amet consectetur{" "}
              <span>adipisicing</span>.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur velit doloribus et omnis earum enim suscipit neque
              quam? Dolorum aliquam harum laborum fuga eum, sint aliquid nostrum
              officiis? Quasi repellat beatae corporis cumque? Iusto pariatur
              quia ratione magni optio explicabo!
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
