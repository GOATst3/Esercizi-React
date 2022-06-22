import './App.css';
import Login from './Login';
import UncontrolledLogin from './UncontrolledLogin';

function App() {
  return (
    <div className="App">
    <h1>Controlled</h1>
    <Login/>
    <h1>Uncontrolled</h1>
    <UncontrolledLogin/>
    </div>
  );
}

export default App;
