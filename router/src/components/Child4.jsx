import React from "react";
import { ToggleContext } from "../contexts/ToggleContext";
import { useContext } from "react";

const Child4 = () => {
  // context 가져오기
  const { toggle } = useContext(ToggleContext);

  return (
    <div>
      <h2>Child4</h2>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default Child4;
