import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

const InstallMetamask = ({ setCurrentUser }) => {
  const handleLogin = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        const currentUserAddress = accounts[0];
        setCurrentUser(currentUserAddress);
      }
    } catch (error) {
      Swal.fire("Error getting current user account: please login to metamask");
    }
  };
  return (
    <div className="flex min-h-screen flex-col gap-3 justify-center items-center">
      <p>
        It apprears that Metamask is not installed, <br />
        Download{" "}
        <Link
          href="https://metamask.io/"
          target="_blank"
          className="text-blue-500"
        >
          Metamask
        </Link>{" "}
        to continue.
      </p>
      <button
        onClick={handleLogin}
        className="bg-black text-white dark:bg-white dark:text-black px-3 py-2 rounded-xl"
      >
        Sign Up
      </button>
    </div>
  );
};

export default InstallMetamask;
