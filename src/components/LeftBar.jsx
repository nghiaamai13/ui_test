import React from "react";
import { BsBrush } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineMoreHoriz } from "react-icons/md";
import LeftButton from "./LeftButton.jsx";

const LeftBar = () => {
  return (
    <div
      className="border-layout top-0 hidden h-screen items-center justify-between
                border-r px-5 xs:sticky
                xs:flex xs:flex-col lg:w-[300px] lg:items-start lg:pr-10"
    >
      <div className="flex flex-col items-center lg:items-start">
        <div className="mt-5 h-14 w-14 lg:ml-14">
          <img
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/900px-Android_O_Preview_Logo.png"
          />
        </div>

        <div className="flex flex-col items-center space-y-5 pt-5 lg:ml-12 lg:items-start">
          <LeftButton Icon={FaHome} text="Home" active />
          <LeftButton Icon={FaHashtag} text="Explore" />
          <LeftButton Icon={FaBell} text="Notifications" />
          <LeftButton Icon={FaUserFriends} text="Friends" />
          <LeftButton Icon={AiOutlineMessage} text="Messages" />
          <LeftButton Icon={MdOutlineMoreHoriz} text="More" />
        </div>

        <div className="post-btn-transition mt-6 h-12 w-12 cursor-pointer justify-center rounded-full bg-emerald-300 lg:ml-10 lg:hidden lg:w-[200px]">
          <BsBrush className="ml-2 mt-2 h-7 w-8 " />
        </div>
        <button className="post-btn-transition ml-14 mt-6 hidden h-12 w-full max-w-[190px] rounded-full bg-emerald-300 lg:inline">
          <span className="font-bold text-white">Post</span>
        </button>
      </div>
      <div className="mb-4 flex h-10 items-center pl-2 lg:ml-10 lg:items-start">
        <img
          className="h-12 rounded-full"
          src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
          alt="profile picture"
        />
        <span className="hidden px-2 font-semibold dark:text-white lg:inline">
          Elon Musk
          <br />
          <span className="text-sm opacity-60">@elonmusk69</span>
        </span>
      </div>
    </div>
  );
};

export default LeftBar;
