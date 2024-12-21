import "./Play_detail.scss";
import img01 from "../../../../public/images/39.jpg";

const Play_detail = () => {
  return (
    <div className="play_detail member_detail">
      <div className="top">
        <h2>Adom Surot</h2>
        <h6>About Play</h6>
      </div>
      <div className="container">
        <div className="middle">
          <img src={img01} alt="" />
          <div className="date">
            <h4>15</h4>
            <span>May</span>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <div className="item">
              <h5 className="post">Director</h5>
              <ul>
                <li>Bakar Bokul</li>
              </ul>
            </div>
            <div className="item">
              <h5 className="post">design</h5>
              <ul>
                <li>Tarek Rahman</li>
              </ul>
            </div>
            <div className="item">
              <h5 className="post">actors</h5>
              <ul>
                <li>Tarek Rahman</li>
                <li>Anthony Russell</li>
                <li>Aron Westy</li>
                <li>Deborah Greene</li>
                <li>Emily Gibson</li>
                <li>Diana Banks</li>
                <li>Jack Martin</li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="detail_about">
              <h5 className="detail_header">About</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, corporis aperiam? Aliquam dicta non aliquid repellat
                voluptatum eligendi quae exercitationem ad debitis assumenda
                vero quisquam hic veritatis magnam aperiam provident dolorem id
                reiciendis, minima maiores voluptates culpa temporibus suscipit
                magnam repellat quidem ducimus animi nobis soluta provident
                nulla <br />
                autem accusantium ratione quaerat quis? Corrupti adipisci modi
                unde, eius, nam, amet neque harum voluptatem eos sapiente est
                facilis a obcaecati. Provident quas architecto voluptas,
                consectetur molestiae tempora deleniti magni quam quasi eius eum
                dolores iusto, cumque facere? Eligendi ducimus obcaecati ipsa
                consequuntur rerum quas illo. Perspiciatis cumque quibusdam
                eveniet qui modi, itaque nisi alias minima dolor molestiae,
                accusamus totam unde, illo eos mollitia amet. Quis commodi
                obcaecati architecto rem placeat aliquid cum, nesciunt magnam?
                Ipsam distinctio ab omnis suscipit?
              </p>
            </div>
            <div className="detail_about">
              <h5 className="detail_header">Director's Word</h5>
              <p>
                autem accusantium ratione quaerat quis? Corrupti adipisci modi
                unde, eius, nam, amet neque harum voluptatem eos sapiente est
                facilis a obcaecati. Provident quas architecto voluptas,
                consectetur molestiae tempora deleniti magni quam quasi eius eum
                dolores iusto, cumque facere? Eligendi ducimus obcaecati ipsa
                consequuntur rerum quas illo. Perspiciatis cumque quibusdam
                eveniet qui modi, itaque nisi alias minima dolor molestiae,
                accusamus totam unde, illo eos mollitia amet. Quis commodi
                obcaecati architecto rem placeat aliquid cum, nesciunt magnam?
                Ipsam distinctio ab omnis suscipit?
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi est nesciunt illo officiis illum quia ipsa placeat
                      amet nihil nostrum molestias autem nemo assumenda
                      recusandae, repellat magni esse ad facere.
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi est nesciunt illo officiis illum quia ipsa placeat
                      amet nihil nostrum molestias autem nemo assumenda
                      recusandae, repellat magni esse ad facere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="upcoming">
          <div className="content">
            <div className="item1">
              <div className="date">
                <h4>15</h4>
                <span>May</span>
              </div>
            </div>
            <div className="item2">
              <div className="play">
                <h4>Adam Surot</h4>
                <h5>Drama / Shilpokola Academy Experimental Hall</h5>
              </div>
            </div>
            <div className="item3">
              <div className="info">
                <button className="ticket event_btn">Get Ticket</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play_detail;
