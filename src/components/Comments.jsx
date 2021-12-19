import React, {useState} from 'react';
import SingleComment from "./SingleComment";

const Comments = (props) => {
  console.log('props Comments >', props)

  const [textComment, setTextComment] = useState('')

  const handleInput = (event) => {
    console.log('input Comment >', event.target.value)
    setTextComment(event.target.value)
  }

  return (
      <div className="card-comments">
        <form className="comments-item-create">
          <input
              value={textComment}
              onChange={handleInput}
              type="text"
              placeholder="add comment"
          />
          <input type="submit" hidden/>
        </form>
        <SingleComment text={textComment}/>
      </div>
  );
};

export default Comments;