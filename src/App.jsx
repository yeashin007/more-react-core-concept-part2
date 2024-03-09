import "./App.css";
import "./Box.css";
import Counter from "./Count";
import Users from "./Users";

function App() {
  function btnHadle() {
    alert("Button 1 Clicked");
  }

  const addToFive = (num) => alert(num + 5);
  return (
    <>
      <h3>Explore More React Part: 2</h3>
      <Users></Users>

      <Counter></Counter>

      {/* method: 1 */}
      <button onClick={btnHadle}>Click Me</button>

      {/* method: 2 */}
      <button onClick={() => alert("Button 2 Clicked")}>Click Me</button>

      {/* method: 2 */}
      <button onClick={() => addToFive(15)}>Click Me</button>
    </>
  );
}

export default App;
