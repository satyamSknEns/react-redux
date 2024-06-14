// import { createStore, applyMiddleware } from "redux";
// import {thunk} from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// import taskReducer from "./reducers/taskReducer";

// const store = createStore(
//   taskReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
