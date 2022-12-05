import React from "react";

const PostAction = ({ Icon, text, textColor }) => {
  return (
    <div className={`hoverAnimation p-2 ` + textColor}>
      <div className="tooltip flex space-x-2" data-tip={text}>
        <Icon className="postcard-btn " />
        <span>1</span>
      </div>
    </div>
  );
};

export default PostAction;
