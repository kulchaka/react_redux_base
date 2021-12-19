import React from 'react';
import {connect} from "react-redux";

const Likes = (props) => {
  console.log(props)
  return (
      <div>
        <div className="button-controls">
          <button>👍🏻 {props.likes}</button>
          <button>👎🏻</button>
        </div>
      </div>
  );
};

const mapStateToProps = (state) => {
  console.log('mapStateToProps >', state)
  return {
    likes: state.likes
  }
}

export default connect(mapStateToProps)(Likes);