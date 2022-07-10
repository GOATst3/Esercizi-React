import CarDetails from "./CarDetails";
function App() {
  return (
    <div className="App">
      <CarDetails initialData={{model:'Fiat Panda',year:2020,color:"gray"}}/>
    </div>
  );
}

export default App;
