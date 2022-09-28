import squibby from "../..//assets/mylove.png";
import useFeeder from "../../Hooks/useFeeder";
import "./Squibby.css";

export default function Squibby() {
  const [squibbyEmotion, handleSquibby] = useFeeder(false);

  return (
    <div id="squibby-wrap">
      <img id="squibby-img" src={squibby} alt="The Squibby"></img>
      <div id="text-wrap">
        <h1 id="squibby-header">This is the Squibby</h1>
        <p id="squibby-info">
          it is {squibbyEmotion ? "satiated" : "filled with rage"}
        </p>
      </div>
      <button id="squibby-feed" onClick={handleSquibby}>
        FEED SQUIBBY
      </button>
    </div>
  );
}
