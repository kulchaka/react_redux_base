import React from 'react';

const SingleComment = ({data}) => {
  const {id, text} = data
  console.log('props Comments >', data)
  return (
      <form className="comments-item">
        <div className="comments-item-delete">
          &times;
        </div>
        <input type="text" value={text}/>
        <input type="submit" hidden/>
      </form>
  );
};

export default SingleComment;