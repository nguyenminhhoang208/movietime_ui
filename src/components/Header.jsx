import React, { useState, useRef } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { BsFillXCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import logo_image from "~/assets/img/icon_MovieTime.png";
import HeaderOptions from "~/components/HeaderOptions";
import options from "~/options";

const Header = () => {
  const [inputHaveData, setInputHaveData] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const input = useRef();

  const handleInput = (e) => {
    if (e.target.value === " ") e.target.value = null;
    if (e.target.value === "" || e.target.value === null) {
      setInputHaveData(false);
    } else if (e.target.value !== "" || e.target.value !== null) {
      setInputHaveData(true);
      setInputValue(e.target.value);
    }
  };

  return (
    <div className="w-full   bg-black  flex justify-center items-center ">
      <div className="w-[90%] h-[68px] flex justify-between  items-center">
        <div className="px-5  py-1 rounded-md ml-1 inline-block bg-mainColor text-xl cursor-pointer hover:scale-105  xl:hidden">
          <FaBars className="mt-[-6px] inline-block" />
        </div>

        <div className=" flex">
          <Link to="/">
            <img src={logo_image} alt="The Movie" width={"80px"} />
          </Link>
          {options.map((option,index) => {
            if (option?.header) {
              return option.options ? (
                <div key={index}>
                  <HeaderOptions options={option.options}>
                    <div className="uppercase text-[#d8d8d8] text-base xxl:text-lg px-3 py-5 cursor-pointer hover:text-mainColor xl:inline-block hidden">
                      {option.title}
                    </div>
                  </HeaderOptions>
                </div>
              ) : (
                <div
                  key={index}
                  className="uppercase text-[#d8d8d8] xxl:text-lg px-3 py-5 cursor-pointer hover:text-mainColor xl:inline-block hidden"
                >
                  {option.title}
                </div>
              );
            }
            return undefined
          })}
        </div>

        {/* search */}
        <div className="flex relative">
          <input
            ref={input}
            onChange={(e) => {
              handleInput(e);
            }}
            className="py-1 pl-3 pr-9 outline-none rounded-md text-black sm:block hidden accent-mainColor"
            type="text"
            placeholder="Nhập tên phim..."
          />
          {inputHaveData ? (
            <div
              onClick={() => {
                input.current.value = null;
                input.current.focus();
                setInputHaveData(false);
              }}
              className=" absolute top-[50%] translate-y-[-50%] right-[25%] text-gray-500 h-[65%] flex items-center border-l-[1.5px] px-[5px] border-gray-400 cursor-pointer"
            >
              <BsFillXCircleFill />
            </div>
          ) : (
            <></>
          )}

          {!inputHaveData ? (
            <div className="px-5  py-1 rounded-md ml-1 inline-block bg-mainColor text-xl cursor-pointer hover:scale-105">
              <FaSearch className="mt-[-6px] inline-block" />
            </div>
          ) : (
            <Link to={"/search/" + inputValue}>
              <div
                onClick={() => {
                  input.current.value = null;
                  setInputHaveData(false);
                }}
                className="px-5  py-1 rounded-md ml-1 inline-block bg-mainColor text-xl cursor-pointer hover:scale-105"
              >
                <FaSearch className="mt-[-6px] inline-block" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
