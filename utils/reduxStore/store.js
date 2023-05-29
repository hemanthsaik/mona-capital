import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import todosReducer from "./reducers/todoReducer";
import todosCaller from "./reducers/todoCaller";

const store = configureStore({
  reducer: { todos: todosReducer, callers: todosCaller },
  middleware: [thunk],
});

export default store;
