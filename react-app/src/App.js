import React from "react"
import Container from './Container';
import Child from './Child';

function App() {
  return (
    <div className="App">
      <Container title='Titolo'>
        <Child/>
      </Container>
    </div>
  );
}

export default App;
