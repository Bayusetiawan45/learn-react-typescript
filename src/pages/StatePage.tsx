import React from "react";
import LoggedIn from "../components/state/LoggedIn";
import User from "../components/state/User";

export default function StatePage() {
  return (
    <div>
      <h1>StatePage</h1>
      <LoggedIn />
      <br />
      <br />
      <h2>User Page</h2>
      <User />
    </div>
  );
}
