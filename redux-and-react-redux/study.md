# React

## typeSctip

## react 基本语法

## class 和 hook

## redux

```js
  import {createStore } from "redux"
  //定义数据更新逻辑
  const reducer = (state = {count: 0}，action) => {
    switch(action.type){
      case: "INCREASE": return { count: state.count + 1 };
      case: "DECREASE": return { count: state.count + 1 };
      default: return state;
    }
  }
  //定义触发行为
  const actions = {
    increase: () => ({ type: "INCREASE" }),
    decrease: () => ({ type: "DECREASE" })
  }
  //初始化store
  const store = createStore(reducer);
  //获取数据
  store.getState().count
  //更新数值
  store.dispatch(increase())
  //订阅数据更新
  store.subscribe(() => {
    store.getState()
  })
```

## react-redux

##
