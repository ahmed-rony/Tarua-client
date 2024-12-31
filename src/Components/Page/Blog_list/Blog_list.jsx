import { Link } from "react-router-dom";
import "./Blog_list.scss";

const Blog_list = () => {
  return (
    <div className="blog_list container">
      <div className="top">
        <h2>News</h2>
        <h6>About Tarua</h6>
      </div>
      <div className="content">
        <div className="item">
          <div className="info">
            <Link
              to="#"
              className="details_info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>20.08.2024</span>
              <h4>Lorem ipsum dolor sit amet consectetur</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                provident suscipit dolorem asperiores pariatur molestias
                temporibus est alias illo possimus ad.
              </p>
            </Link>
          </div>
          <Link
            to="#"
            className="image"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/26.jpg" alt="" />
          </Link>
        </div>
        <div className="item">
          <Link
            to="#"
            className="image"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/26.jpg" alt="" />
          </Link>
          <div className="info">
            <Link
              to="#"
              className="details_info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>20.08.2024</span>
              <h4>Lorem ipsum dolor sit amet consectetur</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                provident suscipit dolorem asperiores pariatur molestias
                temporibus est alias illo possimus ad.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog_list;
