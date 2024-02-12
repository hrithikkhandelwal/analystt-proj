import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [num, nnum] = useState(0);

  const clicked = () => {
    nnum(num + 1);
  };

  useEffect(() => {
    if (num === 0) {
      console.log("Component did mount : ", num);
    }
  }, []);

  useEffect(() => {
    if (num !== 0) {
      console.log("Component did change : ", num);
    }
  }, [clicked]);

  return (
    <div className="App">
      <div>
        <h1 id="idnum">{num}</h1>
        <button onClick={clicked}>ADD</button>
      </div>
    </div>
  );
}

export default App;
