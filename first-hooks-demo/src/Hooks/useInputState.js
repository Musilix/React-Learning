import React, { useState } from "react";

export default function useInputState(initialState = "") {
  const [input, setInput] = useState(initialState);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const reset = () => {
    setInput("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return [input, handleChange, reset, onSubmit];
}
