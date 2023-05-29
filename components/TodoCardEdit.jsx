import React from "react";
import { EditIcon, MoneyIcon } from "./Icons";
import { useDispatch } from "react-redux";

const TodoCardEdit = ({ listId, todo }) => {
  const dispatch = useDispatch();
  const handleEdit = (e) => {
    e.preventDefault();
    const data = {
      id: listId,
      todo: todo,
    };
    dispatch({ type: "CALL_EDIT", payload: data });
  };
  return (
    <div className="w-full h-[116px] px-3 py-2 rounded-xl bg-gray-300 dark:bg-[#191B20]">
      <div className="w-full flex justify-between">
        <div className="flex gap-2">
          <MoneyIcon />
          <p className="">{todo.title}</p>
        </div>
        <button onClick={handleEdit}>
          <EditIcon />
        </button>
      </div>

      <p className="mt-2 ">{todo.description}</p>
    </div>
  );
};

export default TodoCardEdit;
