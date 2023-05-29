import {
  ADD_LIST,
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODOLISTS,
  UPDATE_TODO,
} from "../constants";

const initialState = {
  todoLists: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOLISTS:
      return {
        ...state,
        todoLists: action.payload,
      };
    case ADD_LIST:
      return {
        ...state,
        todoLists: [...state.todoLists, { id: action.payload, todos: [] }],
      };
    case ADD_TODO:
      return {
        ...state,
        todoLists: state.todoLists.map((list) =>
          list.id === action.payload.listName
            ? {
                ...list,
                todos: [...list.todos, action.payload.todo],
              }
            : list
        ),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todoLists: state.todoLists.map((list) =>
          list.id === action.payload.listName
            ? {
                ...list,
                todos: list.todos.map((todo) =>
                  todo.id === action.payload.todoId
                    ? { ...action.payload.todo }
                    : todo
                ),
              }
            : list
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todoLists: state.todoLists.map((list) =>
          list.id === action.payload.listName
            ? {
                ...list,
                todos: list.todos.filter(
                  (todo) => todo.id !== action.payload.todoId
                ),
              }
            : list
        ),
      };
    default:
      return state;
  }
};

export default todosReducer;
