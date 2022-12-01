import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const RightBar = () => {
  return (
    <div className="mx-2 mr-4 hidden md:inline lg:w-[320px]">
      {/*Search*/}
      <div className="sticky top-5 mt-5 h-14 items-center justify-center">
        <input
          type="text"
          className="bg- h-full w-full max-w-[300px] rounded-full  bg-shadowHoverLight p-4
          pl-10 text-black outline-none dark:bg-shadowHoverDark dark:text-white"
          placeholder="Search Socii..."
        />
        <BiSearchAlt className="absolute top-[16px] left-[7px] h-6 w-6 dark:text-white" />
      </div>
      {/*Trends*/}
      {/*Friend recommend*/}
    </div>
  );
};

export default RightBar;
