import { Link } from "react-router-dom";
import "./About.scss";
import img01 from "/images/13.jpg";
// import img02 from "/images/41.jpg";
import img03 from "/images/44.jpg";
import { BASENDPOINT } from "../../../variable";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const About = () => {
  const [loading, setLoading] = useState(false);
  const [member, setMember] = useState([]);

  console.log(member);
  const fetchMember = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(BASENDPOINT + `/member/get-owner`);

      if (response.data) {
        setMember(response.data);
      } else {
        console.warn("Invalid response format:", response.data);
        setMember([]);
      }
    } catch (error) {
      console.error(
        "Error fetching members:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMember();
  }, [fetchMember]);

  return (
    <>
      <div className="container about member_detail">
        <div className="intro">
          <div className="left">
            <div className="about_img">
              <img src={img01} alt="about" />
            </div>
          </div>
          <div className="right">
            <div className="pera">
              <h5 className="detail_header">Our Story</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia dolorum sed excepturi ipsum eum quis dolorem nesciunt
                dolor neque beatae, tenetur nemo porro similique, vero veniam
                modi accusantium itaque numquam! Commodi temporibus ipsa
                placeat? Architecto dignissimos explicabo qui dolor corrupti
                quam neque inventore earum quis quas tempora aspernatur
                provident optio dolores, facilis pariatur odit fuga distinctio
                rerum quasi illo sequi deserunt? Eum odit quos vitae, aliquam
                temporibus nesciunt iste, dolorum praesentium nobis magni,
                veniam ratione et optio suscipit eius eaque. Quibusdam
                accusantium consectetur commodi assumenda amet dolorem deleniti
                vitae, quae fugiat quis. Dolores esse blanditiis perspiciatis
                natus doloremque consequatur saepe officiis, ipsam reprehenderit
                iure ducimus minus optio sit consequuntur sed ab quae est ut a
                vitae repellendus cumque odio quia unde! Reiciendis laborum qui
                dolorem. Temporibus ea hic repellendus ab vel minus sunt ad
                eaque dolor nisi, mollitia facere praesentium sed nesciunt, rem
                rerum numquam, odit necessitatibus et consequatur maxime.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente sit consectetur quos voluptate consequatur, expedita
                assumenda odit perferendis pariatur nostrum nemo officiis
                recusandae cum! Eius accusamus, soluta minus, velit dolore nobis
                sed molestias vitae et maxime pariatur ad accusantium officiis
                unde laborum aperiam eaque, deleniti veritatis facere error hic
                assumenda?
              </p>
            </div>
            <div className="pera_tab">
              <h5 className="detail_header">Our Story</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia dolorum sed excepturi ipsum eum quis dolorem nesciunt
                dolor neque beatae, tenetur nemo porro similique, vero veniam
                modi accusantium itaque numquam! Commodi temporibus ipsa
                placeat? Architecto dignissimos explicabo qui dolor corrupti
                quam neque inventore earum quis quas tempora aspernatur
                provident optio dolores, facilis pariatur odit fuga distinctio
                rerum quasi illo sequi
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente sit consectetur quos voluptate consequatur, expedita
                assumenda odit perferendis pariatur nostrum nemo officiis
                recusandae cum! Eius accusamus, soluta minus, velit dolore nobis
                sed molestias vitae et maxime pariatur ad accusantium officiis
                unde laborum aperiam eaque, deleniti veritatis facere error hic
                assumenda?
              </p>
            </div>
          </div>
        </div>

        <div className="owner">
          <Link to={`/about/${member[0]?._id}`} className="content">
            <img src={member[0]?.image} alt="" />
            <h4>
              {member[0]?.name} <span>Director</span>
            </h4>
          </Link>
          <Link to={`/about/${member[1]?._id}`} className="content">
            <img src={member[1]?.image} alt="" />
            <h4>
              {member[1]?.name} <span>Producer</span>
            </h4>
          </Link>
        </div>
      </div>
      <div className=" about member_detail">

      <div
        className="team_perallax"
        style={{ backgroundImage: `url(${img03})` }}
      ></div>
      </div>
      <div className="container about member_detail">
        <div className="award">
          <h5 className="detail_header">Media & Awards</h5>
          <div className="item">
            <div className="title">
              <h2>2015</h2> <div className="line" />
              <div className="dot" />
            </div>
            <div className="desc">
              <div className="left_item"></div>
              <div className="right_item">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  est nesciunt illo officiis illum quia ipsa placeat amet nihil
                  nostrum molestias autem nemo assumenda recusandae, repellat
                  magni esse ad facere.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="title">
              <h2>2020</h2> <div className="line" />
              <div className="dot" />
            </div>
            <div className="desc">
              <div className="left_item"></div>
              <div className="right_item">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  est nesciunt illo officiis illum quia ipsa placeat amet nihil
                  nostrum molestias autem nemo assumenda recusandae, repellat
                  magni esse ad facere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
