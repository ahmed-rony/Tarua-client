import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img01 from "../../../../public/images/32.jpg";
import axios from "axios";
import { BASENDPOINT } from "../../../variable";

const MembersList = () => {
  const [loading, setLoading] = useState(false);
  const [member, setMember] = useState([]);

  console.log(member);
  const fetchShows = useCallback(async () => {
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
        "Error fetching shows:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchShows();
  }, [fetchShows]);

  return (
    <div className="member container">
      <div className="top">
        <h2>Members</h2>
        <h6>Of Tarua</h6>
      </div>
      <div className="family">
        <div className="col">
          {member?.map((m, i) => (
            <Link key={i} to={`/about/${m?._id}`} className="f_link">
              <img src={m?.image || img01} alt="" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersList;
