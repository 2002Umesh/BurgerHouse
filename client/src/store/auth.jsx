import React, { useState, useEffect, createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [orders, setOrders] = useState(null);
  const myOrders = (order) => {
    setOrders(order);

    return order;
  };
  console.log("my orders :  ", orders);

  const [token, setToken] = useState(localStorage.getItem("token"));

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  let isRegister = !!token;

  const storeTokenInLSt = (serverTokens) => {
    setToken(serverTokens);
    return localStorage.setItem("tokens", serverTokens);
  };

  console.log("isRegister", isRegister);

  //logout
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    alert("logged out successfully")
    // toast.success("logged out successfully");
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          myOrders,
          orders,
          storeTokenInLS,
          storeTokenInLSt,
          isRegister,
          LogoutUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
