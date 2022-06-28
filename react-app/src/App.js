import TodoList from './TodoList'

function App() {

  return (
    <div className="App">
      <TodoList>
        {(items,remove)=>{
          return(
            items.map((item,index)=>
              <li key={index}>
                  {item}
                  <button onClick={()=>remove(index)} style={{margin:'5px 20px'}}>Remove</button>
              </li>
          )
          )
        }}

      </TodoList>
    </div>
  );
}

export default App;
