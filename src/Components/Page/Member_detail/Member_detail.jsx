import "./Member_detail.scss";
import img01 from "../../../../public/images/33.jpg";
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BASENDPOINT } from "../../../variable";

const Member_detail = () => {
  const [loading, setLoading] = useState(false);
  const [member, setMember] = useState([]);
  const { id } = useParams();
  console.log(member);

  const fetchMember = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        BASENDPOINT + `/member/${id}`
      );

      if (response.data) {
        setMember(response.data);
      } else {
        console.warn("Invalid response format:", response.data);
        setMember([]);
      }
    } catch (error) {
      console.error(
        "Error fetching shows:",
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
    <div className="member_detail container">
      <div className="top">
        <h2>{member?.name || "Saul Goodman"}</h2>
        <h6>
          {member?.role?.map((r, index) => (
            <span key={index}>
              {r}
              {index < member?.role?.length - 1 && " | "}
            </span>
          )) || "Actor"}
        </h6>
      </div>
      <div className="content">
        <div className="left">
          <img src={member?.image || img01} alt="" />
          <div className="performance">
            <h5 className="detail_header">Performance</h5>
            <ul>
              {member?.performance &&
                member?.performance?.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="detail_about">
            <h5 className="detail_header">About</h5>
            {member?.description?.map((d, index) => (
              <p key={index}>{d}</p>
            ))}
          </div>
          <div className="award">
            <h5 className="detail_header">Media & Awards</h5>
            {member?.mediaAwards &&
              member?.mediaAwards?.map((d, index) => (
                <div key={index} className="item">
                  <div className="title">
                    <h2>{d?.year}</h2> <div className="line" />
                    <div className="dot" />
                  </div>
                  <div className="desc">
                    <div className="left_item"></div>
                    <div className="right_item">
                      <p>{d?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="detail_contact">
            <h5 className="detail_header">Contact</h5>
            <ul>
              <li>
                <span className="mail">
                  <MdMail className="icon" />
                  <span>{member?.email || "tarua.academy@gmail.com"}</span>
                </span>
              </li>
              <li>
                <span to="#" className="mail">
                  <FaPhone className="icon" />
                  <span>{member?.phone || "+01230000000"}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member_detail;
