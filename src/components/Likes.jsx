import React from 'react';
import {connect} from "react-redux";
import {decrementLikes, incrementLikes} from "../redux/actions";

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
    onIncrementLikes: () => dispatch(incrementLikes()),
    onDecrementLikes: () => dispatch(decrementLikes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);