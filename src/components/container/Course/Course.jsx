import React from "react";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

const Course = ({ image, category, title, participants, rating, price }) => {
  return (
    <div className="p-1 shadow-lg min-w-[20rem] bg-white rounded-md">
      <img src={image} alt="" />
      <div className="mt-2 text-xs text-center text-Teal">{category}</div>
      <div className="p-2 text-sm  font-bold text-center">{title}</div>
      <div className="flex items-center justify-between">


      </div>
    </div>
  );
};

export default Course;
