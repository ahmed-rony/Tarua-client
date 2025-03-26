import "./Play_sec.scss";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BASENDPOINT } from "../../../variable";

const Play_sec = () => {
  const [loading, setLoading] = useState(false);
  const [drama, setDrama] = useState([]);

  const fetchDrama = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(BASENDPOINT + `/drama/getAllDramas`);

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
      {drama?.length > 0 && (
        <div className="title">
          <h2>Our Productions</h2>
        </div>
      )}
      <div className="row">
        {drama?.slice(0, 3).map((data, index) => (
          <Link
            key={index}
            to={`/play/${data?._id}`}
            className="left hvr"
            style={{ backgroundImage: `url(${data?.image})` }}
          >
            <div className="info">
              <h4>
                {data?.title}{" "}
                <span>
                  {data?.director?.map((d, i) => (
                    <>
                      <span key={i}>{d?.name}</span>
                      {i < data?.director?.length - 1 && ", "}
                    </>
                  ))}
                </span>
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Play_sec;
