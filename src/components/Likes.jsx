import React from 'react';

const Likes = (props) => {
  return (
      <div>
        <div className="button-controls">
          <button>👍🏻 {props.likes}</button>
          <button>👎🏻</button>
        </div>
      </div>
  );
};

export default Likes;