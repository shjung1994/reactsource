import React, { useState } from "react";

const useCounter = (initalValue = 0) => {
  const [count, setCount] = useState(initalValue);

  const increase = () => {
    setCount(count+1);
  };
  const decrease = () => {
    setCount(count-1);
  };

  return {count,increase,decrease};
};

export default useCounter;
