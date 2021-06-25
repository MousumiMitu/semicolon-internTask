import React, { useState } from "react";
import Description from "../Description/Description";
import Sidebar from "../Sidebar/Sidebar";
import "./About.css";

const About = () => {
  const dataList = [
    {
      id: 1,
      heading: "Under normal circumstances a fee for it consulting?",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dolor in voluptate eaque nihil animi temporibus sunt modi nam veritatis neque dignissimos porro, quod suscipit vero voluptates id totam atque",
    },
    {
      id: 2,
      heading: "Under normal circumstances a fee for it consulting?",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dolor in voluptate eaque nihil animi temporibus sunt modi nam veritatis neque dignissimos porro, quod suscipit vero voluptates id totam atque",
    },
    {
      id: 3,
      heading: "Under normal circumstances a fee for it consulting?",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dolor in voluptate eaque nihil animi temporibus sunt modi nam veritatis neque dignissimos porro, quod suscipit vero voluptates id totam atque",
    },
    {
      id: 4,
      heading: "Under normal circumstances a fee for it consulting?",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dolor in voluptate eaque nihil animi temporibus sunt modi nam veritatis neque dignissimos porro, quod suscipit vero voluptates id totam atque",
    },
    {
      id: 5,
      heading: "Under normal circumstances a fee for it consulting?",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dolor in voluptate eaque nihil animi temporibus sunt modi nam veritatis neque dignissimos porro, quod suscipit vero voluptates id totam atque",
    },
    {
      id: 6,
      heading: "Under normal circumstances a fee for it consulting?",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dolor in voluptate eaque nihil animi temporibus sunt modi nam veritatis neque dignissimos porro, quod suscipit vero voluptates id totam atque",
    },
    {
      id: 7,
      heading: "Under normal circumstances a fee for it consulting?",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dolor in voluptate eaque nihil animi temporibus sunt modi nam veritatis neque dignissimos porro, quod suscipit vero voluptates id totam atque",
    },
    {
      id: 8,
      heading: "Under normal circumstances a fee for it consulting?",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dolor in voluptate eaque nihil animi temporibus sunt modi nam veritatis neque dignissimos porro, quod suscipit vero voluptates id totam atque",
    },
    {
      id: 9,
      heading: "Under normal circumstances a fee for it consulting?",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dolor in voluptate eaque nihil animi temporibus sunt modi nam veritatis neque dignissimos porro, quod suscipit vero voluptates id totam atque",
    },
    {
      id: 10,
      heading: "Under normal circumstances a fee for it consulting?",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dolor in voluptate eaque nihil animi temporibus sunt modi nam veritatis neque dignissimos porro, quod suscipit vero voluptates id totam atque",
    },
  ];
  return (
    <div className="my-5 py-3 container-box">
      <div className="row my-5">
        <div className="col-md-8 content-area">
          {dataList.map((data) => (
            <Description data={data}></Description>
          ))}
        </div>
        <div className="col-md-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default About;
