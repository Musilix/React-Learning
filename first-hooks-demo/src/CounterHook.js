import React, { useState } from "react";

// the use of the useState hook greatly simplifies what we did with our class in the other file
export default function CounterHook() {
  // the useState method takes in a param that represents an initial val for whatever the thin in the state that we're trying to store should be
  // 1.) it will return a reference to some piece of state (state)
  // 2.) as well a a function to update said piece of state (we call it setCount here)
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{`The Counter Hook says ${count}`}</h1>
      <button onClick={() => setCount(count + 1)}>another</button>
      {/* <button onClick={() => setCount(count + 1)}>another</button> */}
    </div>
  );
}
