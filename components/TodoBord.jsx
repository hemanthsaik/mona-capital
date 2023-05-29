import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoCardForm from "./TodoCardForm";
import TodoCardEdit from "./TodoCardEdit";
import { PlusIcon } from "./Icons";

const TodoBord = () => {
  const todoList = useSelector((state) => state.todos.todoLists);
  const nonEmptyTodoLists = todoList.filter(({ id }) => id !== "Empty list");
  const emptyTodoList = todoList.find(({ id }) => id === "Empty list");
  const dispatch = useDispatch();

  return (
    <div className="w-3/4 h-full p-4 border-r-2 dark:border-gray-600 flex overflow-auto">
      <div className="w-full grid grid-cols-3 gap-3">
        {nonEmptyTodoLists &&
          nonEmptyTodoLists.map(({ id, todos }) => (
            <div key={id}>
              <div className="flex flex-col gap-3">
                <p className="px-3 py-2 rounded-xl bg-gray-300 dark:bg-gray-800">
                  List : {id}
                </p>
                <TodoCardForm id={id} />
                {todos &&
                  todos.map((todo) => (
                    <TodoCardEdit key={todo.id} listId={id} todo={todo} />
                  ))}
              </div>
            </div>
          ))}
        {emptyTodoList && (
          <div className="flex flex-col gap-3">
            <p className="px-3 py-2 rounded-xl bg-gray-300 dark:bg-gray-800">
              List : Empty List
            </p>
            <TodoCardForm action="create" id={emptyTodoList.id} />

            {emptyTodoList &&
              emptyTodoList.todos.map((todo) => (
                <TodoCardEdit key={todo.id} todo={todo} />
              ))}
          </div>
        )}
        <div>
          <div className="px-3 py-2 rounded-xl bg-gray-400 dark:bg-gray-800 flex justify-between">
            <p>Add TODO-List</p>
            <button onClick={() => dispatch({ type: "CALL_CREATE_LIST" })}>
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoBord;
