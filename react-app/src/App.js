import Counter from "./Counter";
function App() {
  return (
    <div className="App">
      <Counter onCounterChange = {(count) =>console.log('the counter is '+count)}/>
    </div>
  );
}

export default App;
