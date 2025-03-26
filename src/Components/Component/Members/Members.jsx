import { Link } from "react-router-dom";
import "./Members.scss";
import img01 from "../../../../public/images/32.jpg";
import { useCallback, useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import axios from "axios";
import { BASENDPOINT } from "../../../variable";

const Members = () => {
  const [loading, setLoading] = useState(false);
  const [member, setMember] = useState([]);

  const fetchMember = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(BASENDPOINT + `/member`);

      if (response.data && Array.isArray(response.data)) {
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
      <div className="member container">
        {member?.length > 0 && (
          <div className="title">
            <h2>Our Team</h2>
          </div>
        )}
        <div className="family">
          <div className="col">
            {member?.slice(0, 10).map((m, i) => (
              <Link key={i} to={`/about/${m?._id}`} className="f_link">
                <img src={m?.image || img01} alt="" />
              </Link>
            ))}
          </div>
        </div>
        <div className="see_more">
          <Link to="/members" className="event_btn">
            See More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Members;
