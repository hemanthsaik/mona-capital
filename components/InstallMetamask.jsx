import React from "react";

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
      console.error("Error getting current user account:", error);
    }
  };
  return (
    <div>
      <p>
        No current user account detected. Please install MetaMask or any
        relevant wallet and sign up.
      </p>
      <button onClick={handleLogin}>Sign Up</button>
    </div>
  );
};

export default InstallMetamask;
