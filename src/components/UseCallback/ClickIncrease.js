import { useCallback, useState } from "react";
import Content from "./Content";

export default function ClickIncrease() {
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);
  return (
    <>
      <Content onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </>
  );
}
