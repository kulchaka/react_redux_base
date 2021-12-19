import React from 'react';

const SingleComment = (props) => {
  console.log('props Comments >', props)
  return (
      <form className="comments-item">
        <div className="comments-item-delete">
          &times;
        </div>
        <input type="text" value={props.text}/>
        <input type="submit" hidden/>
      </form>
  );
};

export default SingleComment;