import {
  ADD_LIST,
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODOLISTS,
  UPDATE_TODO,
} from "../constants";

export const addList = (listName) => ({
  type: ADD_LIST,
  payload: listName,
});

export const addTodo = (listName, todo) => ({
  type: ADD_TODO,
  payload: { listName, todo },
});

export const updateTodo = (todoId, listName, todo) => ({
  type: UPDATE_TODO,
  payload: { todoId, listName, todo },
});

export const deleteTodo = (todoId, listName) => ({
  type: DELETE_TODO,
  payload: { todoId, listName },
});
export const fetchTodoLists = (todoLists) => ({
  type: FETCH_TODOLISTS,
  payload: todoLists,
});
