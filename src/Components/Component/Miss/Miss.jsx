import "./Miss.scss";
import missImg from "../../../../public/images/37.jpg";

const Miss = () => {
  return (
    <div className="miss">
      
      <div className="right">
        <h2>Don't Miss The Opportunity</h2>
        <span className="divider_line"></span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea iste
          culpa temporibus cum repudiandae fugiat vero sit, alias numquam eaque
          eos et qui dolorum reiciendis, ab nisi deserunt, repellat distinctio
          magnam laborum voluptates. Aperiam reiciendis eaque atque cumque
          pariatur dicta, impedit error aut eum voluptas vitae consequuntur
          voluptatum.
        </p>
        <button className="event_btn">Events</button>
      </div>
      <div className="left">
        <div
          className="miss_img"
          style={{ backgroundImage: `url(${missImg})` }}
        ></div>
      </div>
    </div>
  );
};

export default Miss;
