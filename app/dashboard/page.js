"use client";
import InstallMetamask from "@/components/InstallMetamask";
import Todo from "@/components/Todo";
import TodoBord from "@/components/TodoBord";
import { getCurrentUserAccount, contract } from "@/utils/ethereum";
import { fetchTodoLists } from "@/utils/reduxStore/actions/todoActions";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const DashBordPage = () => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);
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

  if (!currentUser) {
    return <InstallMetamask setCurrentUser={setCurrentUser} />;
  }
  return (
    <div className="h-screen w-full">
      {/* setion 1 */}
      <div className="w-full h-[10vh] border-b-2 dark:border-gray-600 p-5 flex justify-between">
        <h1 className="border-b-2 border-[#3772FF]">Section</h1>
        <div className="bg-gray-300 dark:bg-gray-900 flex gap-4 px-3 py-2 text-sm rounded-xl">
          <Image
            src="/assets/icons/wallet.svg"
            alt="wallet icon"
            className="w-auto h-auto "
            width={20}
            height={20}
          />
          <p className="dark:">0.2 $XYZ</p>
          <button className="text-[14px] text-[#3772FF] bg-[#A3E3FF] px-1 rounded">
            Tier 1
          </button>
        </div>
      </div>
      {/* section 2 */}
      <section className="w-full h-[90vh]  flex">
        <TodoBord />
        <Todo />
      </section>
    </div>
  );
};

export default DashBordPage;
