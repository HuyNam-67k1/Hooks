import { useEffect, useRef, useState } from "react";

function StartTime() {
  let timerId = useRef();

  const prevCount = useRef();

  const [count, setCount] = useState(60);

  const [disableStart, setDisableStart] = useState(false);

  const [disableStop, setDisableStop] = useState(true);

  const h1Ref = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    const rect = h1Ref.current.getBoundingClientRect();

    console.log(rect);
  });

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    if (disableStart === false && disableStop === true) {
      setDisableStart(true);
      setDisableStop(false);
    } else {
      setDisableStart(false);
      setDisableStop(true);
    }
    console.log("start: ", timerId.current);
  };

  console.log(count, prevCount.current);

  const handleStop = () => {
    clearInterval(timerId.current);

    if (disableStop === true && disableStart === false) {
      setDisableStop(false);
      setDisableStart(true);
    } else {
      setDisableStop(true);
      setDisableStart(false);
    }
    console.log("stop: ", timerId.current);
  };

  return (
    <div style={{ paddingLeft: 20 }}>
      <h1 ref={h1Ref}>{count}</h1>
      <button
        onClick={handleStart}
        disabled={disableStart}
        style={{ marginRight: 10, cursor: "pointer" }}
      >
        Start
      </button>
      <button
        onClick={handleStop}
        disabled={disableStop}
        style={{ cursor: "pointer" }}
      >
        Stop
      </button>
    </div>
  );
}

export default StartTime;
