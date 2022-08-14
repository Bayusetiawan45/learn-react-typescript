import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function User() {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "bayu",
      email: "bayu@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser({} as AuthUser);
  };
  return (
    <div>
      <button className="btn-primary mr-3" onClick={handleLogin}>
        Login
      </button>
      <button className="btn-info" onClick={handleLogout}>
        Logout
      </button>
      <h3>User name is {user.name}</h3>
      <h3>User email is {user.email}</h3>
    </div>
  );
}
