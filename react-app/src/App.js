import Colors from "./Colors";
import TodoList from './TodoList'

function App() {
  const colors=[
    {id:0,color:'blue'},
    {id:1,color:'red'},
    {id:2,color:'black'}
  ]

  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
