import React, {useEffect, useState} from 'react';
import {commentDelete, commentUpdate} from "../redux/actions";
import {useDispatch} from "react-redux";

const SingleComment = ({data}) => {
  const {id, text} = data
  const [commentText, setCommentText] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    if(text) {
      setCommentText(text)
    }
  }, [text])

  const handleCommentText = (event) => {
    setCommentText(event.target.value)
  }

  const handleUpdate = (event) => {
    event.preventDefault()
    dispatch(commentUpdate(id, commentText))
  }

  const handleDelete = () => {
    dispatch(commentDelete(id))
  }

  return (
      <form onSubmit={handleUpdate} className="comments-item">
        <div onClick={handleDelete} className="comments-item-delete">
          &times;
        </div>
        <input type="text" value={commentText} onChange={handleCommentText}/>
        <input type="submit" hidden/>
      </form>
  );
};

export default SingleComment;