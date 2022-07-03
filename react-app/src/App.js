import Counter from "./Counter";
import { useState } from "react";
function App() {
  const [toggle,setToggle]=useState(true)
  const toggleHandler=()=>setToggle((s)=>!s)
  return (
    <div className="App">
      {toggle&&<Counter onCounterChange = {(count) =>console.log('the counter is '+count)}/>}
      {toggle&&<button onClick={toggleHandler}>unmount</button>}
      {!toggle&&<button onClick={toggleHandler}>mount</button>}
    </div>
  );
}

export default App;
