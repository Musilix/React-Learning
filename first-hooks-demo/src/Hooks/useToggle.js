import { useState } from "react";

// we have abstract out the common functionality of setting a toggle to true or false, and then toggling it back and forth thereafter...
// we generalized the behavior by just utiliizing the useState hook in the background
export default function useToggle(initialStateVal = false) {
  const [state, setState] = useState(initialStateVal);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
}
