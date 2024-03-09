import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    const newCount = count < 100 ? count + 1 : count;
    setCount(newCount);
  }

  function handleReduce() {
    const newCount = count > 0 ? count - 1 : count;
    setCount(newCount);
  }

  return (
    <div
      style={{ border: "2px solid red", borderRadius: "10px", padding: "10px" }}
    >
      <h2>Count:{count}</h2>
      <button
        onClick={handleAdd}
        style={{
          padding: "10px 30px",
          border: "1px solid blue",
          marginRight: "10px",
        }}
      >
        Add
      </button>
      <button
        onClick={handleReduce}
        style={{ padding: "10px 30px", border: "1px solid blue" }}
      >
        Reduce
      </button>
    </div>
  );
}
