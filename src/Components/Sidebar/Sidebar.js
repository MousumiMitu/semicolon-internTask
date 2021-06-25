import React from "react";
import "./Sidebar.css";
import building from "../../images/skyscraper.jpg";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="p-4 " style={{ boxShadow: "2px 2px 5px gray" }}>
        <h3 className="py-2 form-heading">Contact Us</h3>
        <form action="" className="text-center py-3">
          <div className="input-form">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-form">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="Enter email" />
          </div>
          <div className="input-form">
            <i class="fas fa-edit"></i>
            <input type="text" placeholder="Enter message" />
          </div>
        </form>
        <div className="text-center my-3">
          <button className="primary-btn text-center">Get a quote</button>
        </div>
      </div>
      <div className="banner-img">
        <img src={building} alt="" className="img-fuild" />
      </div>
    </div>
  );
};

export default Sidebar;
