import React from "react";
import { useState } from "react";
import { BsImage } from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineSchedule } from "react-icons/md";

const PostBox = () => {
  return (
    <div className="border-layout flex space-x-5 border-b">
      <img
        className="ml-8 flex h-14 cursor-pointer rounded-full"
        src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
        alt="prof"
      />
      <div className="flex w-full flex-col">
        <textarea
          className="mr-6 mt-2 bg-inherit text-2xl font-semibold text-white outline-none"
          placeholder="What's happening ?"
        />
        <div className="flex items-center justify-between">
          <div className="flex space-x-2 pt-8 pb-3">
            <BsImage className="btn-post" />
            <AiOutlineFileGif className="btn-post" />
            <BsEmojiSmile className="btn-post" />
            <HiOutlineLocationMarker className="btn-post" />
            <MdOutlineSchedule className="btn-post" />
          </div>
          <button
            className="post-btn-transition mt-5 mr-6 mb-2 flex h-12 max-w-[100px]  flex-1 items-center rounded-full bg-emerald-300
            px-10 font-semibold"
          >
            <span>Post</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
