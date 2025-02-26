import "./Play_sec.scss";
import img01 from "../../../../public/images/01.jpg";
import img001 from "../../../../public/images/3.jpg";
import img02 from "../../../../public/images/05.jpg";
import img03 from "../../../../public/images/37.jpg";
import img04 from "../../../../public/images/38.jpg";
import img06 from "../../../../public/images/39.jpg";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Play_sec = () => {
  const [loading, setLoading] = useState(false);
  const [drama, setDrama] = useState([]);


  const fetchDrama = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://tarua-server.onrender.com/api/drama/getAllDramas`
      );

      if (response.data) {
        setDrama(response.data);
      } else {
        console.warn("Invalid response format:", response.data);
        setDrama([]);
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
    fetchDrama();
  }, [fetchDrama]);
  return (
    <div className="play_sec container">
      <div className="title">
        <h2>Our Productions</h2>
        {/* <div className="line"/><div className="dot"/> */}
      </div>
      <div className="row">
        {drama?.map((data, index) => (
          <Link
            key={index}
            to={`/play/${data?._id}`}
            className="left hvr"
            style={{ backgroundImage: `url(${data?.image})` }}
          >
            <div className="info">
              <h4>
                {data?.title} <span>{data?.director}</span>
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Play_sec;
