import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile, BsImage } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineSchedule } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

import { useState, useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Popover } from "@headlessui/react";

const PostBox = () => {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const emojiPickerRef = useRef(null);

  const [showEmojis, setShowEmojis] = useState(false);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  useClickOutside(emojiPickerRef, () => setShowEmojis(false));

  return (
    <div className="border-layout flex space-x-5 border-b">
      <img
        className="ml-8 flex h-14 cursor-pointer rounded-full"
        src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
        alt="prof"
      />
      <div className="flex w-full flex-col">
        <TextareaAutosize
          minRows={2}
          maxRows={20}
          className="mr-6 mt-2 resize-none bg-inherit text-2xl font-semibold
          outline-none dark:text-white"
          placeholder="What's happening ?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {selectedFile && (
          <div className="relative">
            <div
              className="absolute top-1 left-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#15181c] bg-opacity-75 hover:bg-[#272c26]"
              onClick={() => setSelectedFile(null)}
            >
              <IoIosClose className="h-5 text-white" />
            </div>
            <img
              src={selectedFile}
              alt=""
              className="max-h-[300px] max-w-[300px] rounded-2xl object-contain lg:max-h-[540px] lg:max-w-[540px]"
            />
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex space-x-2 pt-8 pb-3">
            <div onClick={() => filePickerRef.current.click()}>
              <BsImage className="btn-post" />{" "}
              <input
                type="file"
                ref={filePickerRef}
                hidden
                onChange={addImageToPost}
              />
            </div>

            <button
              onClick={(showEmojis) => {
                if (showEmojis) setShowEmojis(true);
              }}
              className=""
            >
              <BsEmojiSmile className="btn-post" />
            </button>

            {showEmojis && (
              <div className="absolute z-10 mt-7" ref={emojiPickerRef}>
                <Picker
                  data={data}
                  autoFocus
                  onEmojiSelect={addEmoji}
                  theme="dark"
                />
              </div>
            )}

            {/*<Popover>
              <Popover.Button className="ouline-none">
                <BsEmojiSmile className="btn-post" />
              </Popover.Button>
              <Popover.Panel>
                <div className="absolute z-10 w-96 bg-red-400">
                  <Picker
                    data={data}
                    autofocus={true}
                    onEmojiSelect={addEmoji}
                    theme="dark"
                  />
                </div>
              </Popover.Panel>
            </Popover>
          */}

            <AiOutlineFileGif className="btn-post"></AiOutlineFileGif>

            <HiOutlineLocationMarker className="btn-post" />
            <MdOutlineSchedule className="btn-post" />
          </div>
          <button
            className="post-btn-transition mt-5 mr-6 mb-2 flex h-12 max-w-[100px]  flex-1 items-center rounded-full bg-emerald-300
            px-9 font-semibold"
          >
            <span>Post</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
