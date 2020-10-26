import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Countcontainer, CountContainer } from "./components/CountContainer";
import reducers from "./reducer";
const store = createStore(reducers);
export default function ReactRedux() {
  return (
    <Provider store={store}>
      <Countcontainer />
    </Provider>
  );
}
