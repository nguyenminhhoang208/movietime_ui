import React from "react";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";

const HeaderOptions = ({ children, options }) => {
  return (
    <Tippy
      interactive
      offset={[-5, -10]}
      placement="bottom-start"
      render={(attrs) => (
        <ul
          className="w-[350px] bg-[#000] p-1 rounded-xl"
          tabIndex="1"
          {...attrs}
        >
          {options.map((option, index) => {
            return (
              <li
                key={option?.id}
                className="w-[50%] inline-block text-base py-2 px-3 cursor-pointer hover:text-mainColor"
              >
                <Link to={"/search/genres" + option?.id}>{option?.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    >
      {children}
    </Tippy>
  );
};

export default HeaderOptions;
