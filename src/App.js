import logo from './logo.svg';
import './styles.css';
// We're going to use reducer(state,action), this functionality is used as it can be a good practice for operating large scale apps.
// Manages state in a centralized way.
// Separating logic from user actions.
function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>Bug Blaster</h1>
      </div>
    </div>
  );
}

export default App;
