"use client";
import React, { useEffect, useState } from "react";
import { contract, getCurrentUserAccount } from "@/utils/ethereum";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoLists } from "@/utils/reduxStore/actions/todoActions";

const TestPage = () => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);
  const todoList = useSelector((state) => state.todos.todoLists);
  useEffect(() => {
    const fetchCurrentUserAccount = async () => {
      const currentUser = await getCurrentUserAccount();
      setCurrentUser(currentUser);
    };

    fetchCurrentUserAccount();
  }, []);
  useEffect(() => {
    const fetchTodoListsData = async () => {
      try {
        const todos = await contract.getTodos(currentUser);
        dispatch(fetchTodoLists(todos));
      } catch (error) {
        console.error("Error fetching TodoLists:", error);
      }
    };

    if (currentUser) {
      fetchTodoListsData();
    }
  }, [currentUser]);
  return (
    <div>
      <h1>TestPage</h1>
      {todoList.map(({ id, todos }) => (
        <div key={id}>
          <p>{id}</p>
          {todos &&
            todos.map((todo) => (
              <div>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default TestPage;
