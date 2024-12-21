import "./About_Sec.scss";
import aboutImg from "../../../../public/images/26.jpg";
import { Link } from "react-router-dom";

const About_Sec = () => {
    return (
        <div className="about_sec">
                <div className="left" style={{ backgroundImage: `url(${aboutImg})` }}>
                </div>
                <div className="right">
                    <h2>Making A Difference Theater</h2>
                    <span className="divider_line"></span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea iste culpa temporibus cum repudiandae fugiat vero sit, alias numquam eaque eos et qui dolorum reiciendis, ab nisi deserunt, repellat distinctio magnam laborum voluptates. Aperiam reiciendis eaque atque cumque pariatur dicta, impedit error aut eum voluptas vitae consequuntur voluptatum, earum non sunt vel tempora delectus nisi incidunt dolore dignissimos veritatis tenetur quisquam tempore! Vel provident suscipit sequi. Vitae est repellendus, magni quos, blanditiis dicta, illum facere rem ex veritatis architecto magnam.</p>
                  <Link href="/about" className="event_btn">See More</Link>
                </div>

        </div>
    );
};

export default About_Sec;