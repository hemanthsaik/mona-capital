"use client";
import { useState } from "react";
import { MoneyIcon, PlusIcon } from "./Icons";
import { contract } from "@/utils/ethereum";
import { useDispatch } from "react-redux";
import { addTodo } from "@/utils/reduxStore/actions/todoActions";
import Swal from "sweetalert2";

const TodoCardForm = ({ id }) => {
  const [todoName, setTodoName] = useState("");
  const [tododesc, setTododesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await contract.addTodo(id, todoName, tododesc);
      Swal.fire(`Todo ${todoName} has been creadted under List ${id}`);
      dispatch(
        addTodo({
          id,
          name: todoName,
          description: tododesc,
        })
      );
    } catch (error) {
      console.error("Error adding todo:", error);
    }
    setIsLoading(false);
    setTodoName("");
    setTododesc("");
  };
  return (
    <div className="w-full h-[116px] px-3 py-2 rounded-xl  bg-gray-300 dark:bg-[#191B20]">
      <form onSubmit={handleSubmit}>
        <div className="w-full flex justify-between">
          <div className="flex gap-2">
            <MoneyIcon />
            <input
              type="text"
              className="bg-gray-300 dark:bg-[#191B20] w-full font-bold outline-none"
              placeholder="Add TODO"
              value={todoName}
              onChange={(obj) => setTodoName(obj.target.value)}
            />
          </div>
          <button disabled={isLoading} type="submit" className="">
            <PlusIcon isLoading={isLoading} />
          </button>
        </div>
        <textarea
          className="w-full h-[70px] bg-gray-300 dark:bg-[#191B20] mt-2 resize-none outline-none text-sm"
          placeholder="Add TODO Description..."
          value={tododesc}
          onChange={(obj) => setTododesc(obj.target.value)}
        ></textarea>
      </form>
    </div>
  );
};

export default TodoCardForm;
