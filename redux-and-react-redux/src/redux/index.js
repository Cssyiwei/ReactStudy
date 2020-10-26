import React, { useState } from "react";
import { createStore } from "redux";
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const actions = {
  increase: () => ({ type: "INCREASE" }),
  decrease: () => ({ type: "DECREASE" })
};
const store = createStore(reducer);
export default function Redux() {
  const { getState, subscribe, dispatch } = store;
  const [count, setCount] = useState(getState().count);
  const onIncrement = () => {
    dispatch(actions.increase());
  };

  const onDecrement = () => {
    dispatch(actions.decrease());
  };
  subscribe(() => {
    setCount(getState().count);
  });
  return (
    <div>
      <h1>redux</h1>
      <h1>{count}</h1>
      <button className="btn" onClick={onIncrement}>
        增加
      </button>
      <button className="btn" onClick={onDecrement}>
        减少
      </button>
    </div>
  );
}
