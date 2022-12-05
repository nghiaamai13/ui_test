import { useState } from "react";
import { AiOutlineRetweet, AiOutlineShareAlt } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import PostAction from "./PostAction";

const PostCard = () => {
  const [like, setLike] = useState(false);

  return (
    <div className="border-layout mt-4 flex border-b pb-4 dark:text-white">
      <img
        className="ml-8 mr-4 h-14 cursor-pointer rounded-full"
        src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
        alt="prof"
      />
      <div className="flex w-[82%] flex-col">
        <div className="flex w-full items-center space-x-2">
          <span className="cursor-pointer font-bold hover:underline">
            Elon Musk
          </span>
          <span className="opacity-60">@elonmusk69</span>
          <span className="ml-3 text-sm opacity-60">2 min</span>
        </div>

        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="mt-3 mr-2 -ml-1 flex justify-between">
          <PostAction
            Icon={AiOutlineRetweet}
            text="Share"
            textColor="hover:text-emerald-300"
          />
          <PostAction
            Icon={FaRegComment}
            text="Comment"
            textColor="hover:text-blue-300"
          />

          <div className="" onClick={() => setLike(!like)}>
            {like ? (
              <PostAction Icon={FcLike} text="Like" textColor="text-red-300" />
            ) : (
              <PostAction
                Icon={FcLikePlaceholder}
                text="Like"
                textColor="hover:text-red-500 text-opacity-60"
              />
            )}
          </div>

          <PostAction
            Icon={AiOutlineShareAlt}
            text="Social Connect"
            textColor="hover:text-blue-300"
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
