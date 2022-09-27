import React from "react";
import useToggle from "./Hooks/useToggle";

export default function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartbroken, toggleIsHeartbroken] = useToggle(true);

  // const [isHappy, setIsHappy] = useState(true);
  // const [isHeartbroken, setIsHeartbroken] = useState(true);

  // As we can see in the commented out code above, there is some redudnant repeated code starting to peek out.
  // We can abstract out the functionality  that is being reimplmented in each instance, so they can both reference just one implmentation
  return (
    <div>
      <h1
        style={{ cursor: "pointer", fontSize: "198px", userSelect: "none" }}
        onClick={() => toggleIsHappy(!isHappy)}
      >
        {isHappy ? "😊" : "🥺"}
      </h1>

      <h1
        style={{ cursor: "pointer", fontSize: "198px", userSelect: "none" }}
        onClick={() => toggleIsHeartbroken(!isHeartbroken)}
      >
        {isHeartbroken ? "❤️" : "💔"}
      </h1>
    </div>
  );
}
