import React from 'react';
import {connect} from "react-redux";

const Likes = (props) => {
  console.log(props)
  return (
      <div>
        <div className="button-controls">
          <button
              onClick={props.onIncrementLikes}
          >
            👍🏻 {props.likes}
          </button>
          <button onClick={props.onDecrementLikes}>👎🏻</button>
        </div>
      </div>
  );
};

const mapStateToProps = (state) => {
  console.log('mapStateToProps >', state)
  const {likesReducer} = state
  return {
    likes: likesReducer.likes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementLikes: () => {
      const action = {type: 'INCREMENT'}
      dispatch(action)
    },
    onDecrementLikes: () => {
      const action = {type: 'DECREMENT'}
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);