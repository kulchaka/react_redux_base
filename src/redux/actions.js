import {COMMENT_CREATE, COMMENT_UPDATE, DECREMENT, INCREMENT, INPUT_TEXT} from "./types";

export const incrementLikes = () => {
  return {
    type: INCREMENT
  }
}

export const decrementLikes = () => {
  return {
    type: DECREMENT
  }
}

export const inputText = (text) => {
  return {
    type: INPUT_TEXT,
    text: text
  }
}

export const commentCreate = (id, text) => {
  return {
    type: COMMENT_CREATE,
    data: {
      id,
      text
    }
  }
}

export const commentUpdate = (id, text) => {
  return {
    type: COMMENT_UPDATE,
    data: {
      id,
      text
    }
  }
}