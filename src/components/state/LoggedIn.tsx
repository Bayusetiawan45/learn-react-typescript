import React, { useState } from "react";

export default function LoggedIn() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };
  const handleLogout = () => {
    setIsLogin(false);
  };
  return (
    <div>
      <button className="btn-primary mr-3" onClick={handleLogin}>
        Login
      </button>
      <button className="btn-info" onClick={handleLogout}>
        Logout
      </button>
      <h3>User is {isLogin ? "logged in" : "logged out"}</h3>
    </div>
  );
}
