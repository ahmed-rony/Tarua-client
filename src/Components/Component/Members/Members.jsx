import { Link } from "react-router-dom";
import "./Members.scss";
import img01 from "../../../../public/images/14.jpg";
import img02 from "../../../../public/images/36.jpg";
import img03 from "../../../../public/images/30.jpg";
import img04 from "../../../../public/images/31.jpg";
import { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Members = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="member container">
        <div className="title">
          <h2>Our Team</h2>
        </div>
        <div className="family">
          <div className="col">
            <Link to="/about/1" className="f_link">
              <img src={img01} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img02} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img03} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img04} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img02} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img01} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img04} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img03} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img01} alt="" />
            </Link>
            <Link to="/about/1" className="f_link">
              <img src={img04} alt="" />
            </Link>
          </div>
          {/* <div className="col">
          </div>
          <div className="col">
          </div>
          <div className="col">
          </div>
          <div className="col">
          </div> */}
        </div>
        <div className="see_more">
          <button className="event_btn">See More</button>
        </div>
      </div>
      {/* {modalOpen && (
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} center>
          <div className="member_detail containers">
            <div className="top">
              <h2>Saul Goodman</h2>
              <h6>Actor</h6>
            </div>
            <div className="content">
              <div className="left">
                <img src={img01} alt="" />
                <div className="performance">
                  <h5 className="detail_header">Performance</h5>
                  <ul>
                    <li>Adam Surot</li>
                    <li>Lorem, ipsum dolor</li>
                    <li>Lorem, ipsum</li>
                    <li>Loremum</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Loremum</li>
                    <li>Lorem, ipsum</li>
                    <li>Lorem, ipsum dolor</li>
                    <li>Lorem dolor sit</li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="detail_about">
                  <h5 className="detail_header">About</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, corporis aperiam? Aliquam dicta non aliquid
                    repellat voluptatum eligendi quae exercitationem ad debitis
                    assumenda vero quisquam hic veritatis magnam aperiam
                    provident dolorem id reiciendis, minima maiores voluptates
                    culpa temporibus suscipit magnam repellat quidem ducimus
                    animi nobis soluta provident nulla <br />
                    autem accusantium ratione quaerat quis? Corrupti adipisci
                    modi unde, eius, nam, amet neque harum voluptatem eos
                    sapiente est facilis a obcaecati. Provident quas architecto
                    voluptas, consectetur molestiae tempora deleniti magni quam
                    quasi eius eum dolores iusto, cumque facere? Eligendi
                    ducimus obcaecati ipsa consequuntur rerum quas illo.
                    Perspiciatis cumque quibusdam eveniet qui modi, itaque nisi
                    alias minima dolor molestiae, accusamus totam unde, illo eos
                    mollitia amet. Quis commodi obcaecati architecto rem placeat
                    aliquid cum, nesciunt magnam? Ipsam distinctio ab omnis
                    suscipit?
                  </p>
                </div>
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nisi est nesciunt illo officiis illum quia ipsa
                          placeat amet nihil nostrum molestias autem nemo
                          assumenda recusandae, repellat magni esse ad facere.
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nisi est nesciunt illo officiis illum quia ipsa
                          placeat amet nihil nostrum molestias autem nemo
                          assumenda recusandae, repellat magni esse ad facere.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detail_contact">
                  <h5 className="detail_header">Contact</h5>
                  <ul>
                    <li>
                      <Link to="#">
                        <FaFacebookF className="icon" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaInstagram className="icon" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaTwitter className="icon" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )} */}
    </>
  );
};

export default Members;
