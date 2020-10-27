import React from "react";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { NewsContainer } from "./newsContainer";
export const actionTypes = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR"
};
const initState = {
  isFetching: false,
  newsList: [],
  errorMsg: ""
};
export const actionCreator = {
  fetchNews: () => {
    return dispatch => {
      dispatch({ type: actionTypes.FETCH_START });
      new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve([{ title: "111" }, { title: "222" }]);
        }, 2000);
      })
        .then(response => {
          dispatch({
            type: actionTypes.FETCH_SUCCESS,
            news: response
          });
        })
        .catch(() => {
          dispatch({
            type: actionTypes.FETCH_ERROR
          });
        });
    };
  }
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return { ...state, isFetching: true };
    case actionTypes.FETCH_SUCCESS:
      return { ...state, isFetching: false, newsList: action.news };
    case actionTypes.FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        newsList: [],
        errorMsg: "服务异常"
      };
    default:
      return state;
  }
};
const store = createStore(reducer, applyMiddleware(thunk));
export default function NewThunk() {
  return (
    <Provider store={store}>
      <NewsContainer />
    </Provider>
  );
}
