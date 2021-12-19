import React, {useState} from 'react';
import SingleComment from "./SingleComment";
import uniqid from "uniqid";
import {useDispatch, useSelector} from "react-redux";
import {commentCreate} from "../redux/actions";

const Comments = (props) => {

  const [textComment, setTextComment] = useState('')

  const dispatch = useDispatch()

  const comments = useSelector(state => {
    const {commentsReducer} = state
    console.log(commentsReducer.comments)
    return commentsReducer.comments
  })

  const handleInput = (event) => {
    setTextComment(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    const id = uniqid()
    dispatch(commentCreate(id, textComment))
    setTextComment('')
  }

  return (
      <div className="card-comments">
        <form
            onSubmit={handleSubmit}
            className="comments-item-create"
        >
          <input
              onChange={handleInput}
              type="text"
              value={textComment}
              placeholder="add comment"
          />
          <input type="submit" hidden/>
        </form>
        {comments && comments.map(el => {
          return <SingleComment data={el} key={el.id}/>
        })}
      </div>
  );
};

export default Comments;