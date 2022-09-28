import React, { useState } from "react";

export default function useFeeder(initialState) {
  const [squibbyState, setSquibbyState] = useState(initialState);
  // let dotsCounter;
  // let squibbyTimeout;
  // let dots = "";

  // const closureDots = makeDots;

  const handleSquibby = (e) => {
    e.preventDefault();

    // clear any existing timeouts or intervals set up from a button press
    // if (dotsCounter) {
    //   clearInterval(dotsCounter);
    // }
    // if (squibbyTimeout) {
    //   clearTimeout(squibbyTimeout);
    // }

    // intiailize our loading dots
    // console.log(dots);
    // dots = closureDots(dots);
    // console.log(dots);

    // dotsCounter = setInterval(
    //   () => (dots = setSquibbyState(closureDots(dots))),
    //   225
    // );

    // squibbyTimeout = setTimeout(() => {
    //   const feelingAfterEating = Math.round(Math.random(0));
    //   setSquibbyState(feelingAfterEating);
    // }, 3000);

    const feelingAfterEating = Math.round(Math.random(0));
    setSquibbyState(feelingAfterEating);
  };

  return [squibbyState, handleSquibby];
}

const makeDots = (dots) => {
  if (dots.length > 0 || dots.length < 3) {
    dots = dots + ".";
    return dots;
  }

  dots = ".";
  return dots;
};
