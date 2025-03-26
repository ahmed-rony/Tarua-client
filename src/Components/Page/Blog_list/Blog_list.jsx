import { Link } from "react-router-dom";
import "./Blog_list.scss";
import { News_Data } from "../../Utils/Datas/News";
import { useEffect, useState } from "react";
import { BASENDPOINT, NEWSPOINT } from "../../../variable";
import axios from "axios";
import { getDateNum, getFullYear, getMonth } from "../Seat_Plan/Seat_Plan";

const Blog_list = () => {
  const [newsList, setNewsList] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Track if there's more news to load

  // console.log(newsList);

  // Fetch news when the user scrolls to the bottom of the page
  const fetchNews = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      console.log(`Fetching news with skip: ${skip}`); // Log skip value before fetching
      const response = await axios.get(
        BASENDPOINT + NEWSPOINT + `?skip=${skip}`
      );

      if (response.data.length === 0) {
        setHasMore(false); // No more data to load
      }

      setNewsList((prevNews) => {
        const newNews = response.data.filter(
          (item) =>
            !prevNews.some((existingItem) => existingItem._id === item._id)
        );
        return [...prevNews, ...newNews];
      });

      setSkip((prevSkip) => prevSkip + 20); // Increase skip for next fetch
    } catch (error) {
      console.error("Error fetching news", error);
    } finally {
      setLoading(false);
    }
  };

  // Set up the scroll event listener
  const handleScroll = () => {
    const bottom =
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight;
    if (bottom) {
      fetchNews();
    }
  };

  // UseEffect to initialize fetch and add/remove scroll listener
  useEffect(() => {
    fetchNews(); // Only runs once when the component is mounted
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []); // Empty dependency array means this effect only runs on mount and unmount

  return (
    <div className="blog_list container">
      <div className="top">
        <h2>News</h2>
        <h6>About Tarua</h6>
      </div>
      <div className="content">
        {newsList?.map((item, index) => (
          <div className="item" key={index}>
            <div className="info">
              <Link
                to={item?.url}
                className="details_info"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  {getMonth(item?.date)} {getDateNum(item?.date)},{" "}
                  {getFullYear(item?.date)}
                </span>
                <h4>{item?.title}</h4>
                <p>{item?.description}</p>
              </Link>
            </div>
            <Link
              to={item?.url}
              className="image"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item?.image} alt={item.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog_list;
