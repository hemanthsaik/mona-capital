"use client";
import { contract } from "@/utils/ethereum";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeftIcon } from "./Icons";
import Swal from "sweetalert2";

const Todo = () => {
  const formData = useSelector((state) => state.callers);

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(formData?.todo.title);
  const [desc, setDesc] = useState(formData?.todo.description);
  const [listName, setListName] = useState("");

  useEffect(() => {
    if (formData?.todo?.title) {
      setTitle(formData.todo.title);
    }
    if (formData?.todo?.description) {
      setDesc(formData.todo.description);
    }
  }, [formData]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    try {
      setIsLoading(true);
      await contract.updateTodo(formData.todo.id, formData.id, title, desc);
      console.log("Todo updated successfully");
      Swal.fire(
        `updated list : ${formData.id}'s todo : title:${title},  description: ${desc} \n Refresh after transaction conformation`
      );
      dispatch({ type: "UPDATE_EDIT" });
    } catch (error) {
      console.error("Error updating todo:", error);
      dispatch({ type: "UPDATE_EDIT" });
    }
    setIsLoading(false);
  };

  const handleAddlist = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await contract.addList(listName);
      setIsLoading(false);
      Swal.fire("List added successfully");
    } catch (error) {
      Swal.fire("not added");
      console.error("Error adding list:", error);
    }
    setListName("");
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  if (formData) {
    return (
      <div className="p-5 w-1/4">
        <div className="flex gap-3">
          <ArrowLeftIcon />
          <h2>Edit Todo</h2>
        </div>

        {formData && <p className="mt-5">List: {formData.id}</p>}
        <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-col gap-2 mt-5">
            <input
              type="text"
              placeholder="Title"
              className="py-2 px-3 rounded-lg bg-gray-300 dark:bg-gray-800"
              value={title}
              onChange={handleTitleChange}
            />
            <textarea
              type="text"
              placeholder="Carrot improves eyesight."
              className="py-2 px-3 rounded-lg bg-gray-300 dark:bg-gray-800 h-28"
              value={desc}
              onChange={handleDescChange}
            ></textarea>
            <button
              type="submit"
              className="py-1 bg-[#3772FF] text-white rounded"
              disabled={isLoading}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="p-5 w-1/4">
      <h3>Add List</h3>
      <form onSubmit={handleAddlist}>
        <div className="w-full flex flex-col gap-2 mt-5">
          <input
            type="text"
            placeholder="List Name"
            className="py-2 px-3 rounded-lg bg-gray-300 dark:bg-gray-800 mt-5"
            value={listName}
            onChange={(obj) => setListName(obj.target.value)}
          />
          <button
            type="submit"
            className="py-1 bg-[#3772FF] rounded text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Todo;
