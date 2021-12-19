import React, {useEffect, useState} from 'react';

const SingleComment = ({data}) => {
  const {id, text} = data
  const [commentText, setCommentText] = useState('')
  console.log('props Comments >', data)

  useEffect(() => {
    if(text) {
      setCommentText(text)
    }
  }, [text])

  const handleCommentText = (event) => {
    setCommentText(event.target.value)
  }

  return (
      <form className="comments-item">
        <div className="comments-item-delete">
          &times;
        </div>
        <input type="text" value={commentText} onChange={handleCommentText}/>
        <input type="submit" hidden/>
      </form>
  );
};

export default SingleComment;