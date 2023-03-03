import React from "react";
import { Link } from "react-router-dom";
import iconMovieTime from "~/assets/img/icon_MovieTime.png";

const NotFound = () => {
  return (
    <div className="  w-full h-[758px] flex justify-center items-center flex-col">
      <h1 className="  text-5xl text-center mb-8">
        Not Found! <br />
        <p className="  text-mainColor hover:scale-110 inline-block pr-4 ">
          <Link to={"/"}>Click here</Link>
        </p>
        to return to the HomePage
      </h1>
      <img src={iconMovieTime} className="" alt="Movie Time Logo" width="220px" />
    </div>
  );
};

export default NotFound;
