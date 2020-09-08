import React, { useState } from "react";

interface IProps {
  onComment: (comment: string) => void;
  onClose: () => void;
}

const CommentBox = (props: IProps) => {
  const { onComment, onClose } = props;
  const [comment, setComment] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setComment(e.target.value);
        }}
        value={comment}
      />
      <input
        type="button"
        value="close"
        onClick={() => {
          onClose();
        }}
      />
      <input
        type="button"
        value="comment"
        onClick={() => {
          onComment(comment);
        }}
      />
    </div>
  );
};

export default CommentBox;
