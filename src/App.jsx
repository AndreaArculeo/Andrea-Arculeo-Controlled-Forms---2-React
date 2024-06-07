import { useState } from "react";
import "./App.css";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";

function App() {
  return (
    <>
      <InteractiveWelcome />
      <h2> Effettua il login</h2>
      <Login />
    </>
  );
}

export default App;
