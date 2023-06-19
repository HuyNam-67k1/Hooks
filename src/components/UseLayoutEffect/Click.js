import { useLayoutEffect, useEffect, useState } from "react";

function Click() {
  const [count, setCount] = useState(0);


  useLayoutEffect(() => {
    count > 3 && setCount(0);
  }, [count]);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default Click;
