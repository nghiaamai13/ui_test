import React from "react";
import Navbar from "./Navbar";
import PostBox from "./PostBox";
import PostContainer from "./PostContainer";

const Feed = () => {
  return (
    <div
      className="border-layout mr-2 h-full min-w-[400px] max-w-[620px] flex-grow
     flex-col overflow-hidden border-r dark:bg-black sm:min-w-[620px]"
    >
      <Navbar />
      <PostBox />

      <PostContainer />
    </div>
  );
};

export default Feed;
