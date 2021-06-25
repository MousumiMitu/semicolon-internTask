import React from "react";
import "./Footer.css";
import cover from "../../images/colleagues-working-together-modern-office-using-devices-gadgets-during-creative-meeting_155003-33626.jpg";
const Footer = () => {
  return (
    <section className="my-5">
      <div className="container-box d-flex justify-content-lg-between">
        <div>ONITIR</div>
        <div className="social-icons text-center d-flex">
          <div className="icon-box">
            <i class="fab fa-facebook-f"></i>
          </div>
          <div className="icon-box">
            <i class="fab fa-twitter"></i>
          </div>
          <div className="icon-box">
            <i class="fab fa-linkedin"></i>
          </div>
          <div className="icon-box">
            <i class="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="container-box footer-area d-flex justify-content-between my-5">
        <div>
          <h3>Company </h3>
          <ul>
            <li>About</li>
            <li>Leadership</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>About</li>
            <li>Leadership</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3>Community </h3>
          <ul>
            <li>About</li>
            <li>Leadership</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>About</li>
            <li>Leadership</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3>Solutions </h3>
          <ul>
            <li>About</li>
            <li>Leadership</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>About</li>
            <li>Leadership</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="newsfeed-section">
          <h3>News feed </h3>
          <div
            className="d-flex justify-content-between my-3"
            style={{ height: "60px" }}
          >
            <div className="news-feed-icon">
              <img src={cover} alt="" />
            </div>
            <div>
              <h6>14th may</h6>
              <p>Managing partner along with senior counsels</p>
            </div>
          </div>

          <div
            className="d-flex justify-content-between my-3"
            style={{ height: "60px" }}
          >
            <div className="news-feed-icon">
              <img src={cover} alt="" />
            </div>
            <div>
              <h6>14th may</h6>
              <p>Managing partner along with senior counsels</p>
            </div>
          </div>
          <div
            className="d-flex justify-content-between my-3"
            style={{ height: "60px" }}
          >
            <div className="news-feed-icon">
              <img src={cover} alt="" />
            </div>
            <div>
              <h6>14th may</h6>
              <p>Managing partner along with senior counsels</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
