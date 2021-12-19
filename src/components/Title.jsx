import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {inputText} from "../redux/actions";

const Title = () => {

  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(inputText(event.target.value))
  }

  const text = useSelector(state => state.inputReducer.text)

  return (
      <div className="card-title">
        <div className="card-title-top">
          <input
              type="text"
              onChange={handleChange}
              placeholder="enter text"
          />
        </div>
        <p>{text}</p>
      </div>
  );
};

export default Title;