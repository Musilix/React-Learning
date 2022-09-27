import React /*,{ useState }*/ from "react";
import useInputState from "./Hooks/useInputState";

export default function InputHook() {
  // Avoid this in case of repetetive code
  // const [username, setUsername] = useState("");

  const [username, updateUsername, resetUsername] = useInputState("");
  const [email, updateEmail, resetEmail] = useInputState("");

  const onSubmit = (e) => {
    e.preventDefault();
    resetEmail();
    resetUsername();
    console.log({ username, email });
  };

  return (
    <div>
      <form>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => updateUsername(e)}
        />
        <input
          name="username"
          type="text"
          value={username}
          onChange={(e) => updateEmail(e)}
        />
        <button onClick={onSubmit}>Submit that ish</button>
      </form>
    </div>
  );
}
