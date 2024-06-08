import { useState } from "react";
import "./App.css";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";

const App = () => {
  const handleLogin = (data) => {
    console.log("Login data:", data);
  };
  return (
    <>
      <InteractiveWelcome />
      <h2> Effettua il login</h2>
      <Login onLogin={handleLogin} />
      <UncontrolledLogin />
    </>
  );
};

export default App;
