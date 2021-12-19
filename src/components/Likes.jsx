import React from 'react';
import {connect} from "react-redux";

const Likes = (props) => {
  console.log(props)
  return (
      <div>
        <div className="button-controls">
          <button onClick={props.onIncrementLikes}>👍🏻 {props.likes}</button>
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

const mapDispatchToProps = (dispatch) => {
  return {

    onIncrementLikes: () => {
      console.log('click like')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);