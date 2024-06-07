import { useState } from "react";
import Welcome from "./Welcome";
export default function interactiveWelcome() {
  const [name, setName] = useState("");

  function handleNameChange(event) {
    const value = event.target.value;
    setName(value);
  }

  return (
    <>
      <div>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <Welcome name={name} />
    </>
  );
}
