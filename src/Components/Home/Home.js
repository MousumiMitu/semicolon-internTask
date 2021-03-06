import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <div className="header-section">
        <Navbar />
        <div className="text-center banner-text">
          <h2>FAQ</h2>
          <p>your partner for software innovation</p>
        </div>
        <div class="custom-shape-divider-bottom-1624565837">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <button className="primary-btn btn-position">Home | FAQ</button>
      </div>
    </section>
  );
};

export default Home;
