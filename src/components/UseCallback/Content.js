import { memo } from "react";
function Content({ onIncrease }) {
  console.log("re-render");

  return (
    <>
      <button onClick={onIncrease}>Click me</button>
      <h1>Hello ae</h1>
    </>
  );
}

export default memo(Content);
