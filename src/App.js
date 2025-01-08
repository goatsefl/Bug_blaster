import logo from './logo.svg';
import "./App.css";
import './styles.css';
import { useReducer } from 'react';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducers/ticketReducer';
// We're going to use reducer(state,action), this functionality is used as it can be a good practice for operating large scale apps.
// Manages state in a centralized way.
// Separating logic from user actions.
function App() {
  const initialState = { ticket: [] }
  const [state, dispatch] = useReducer(ticketReducer, initialState)
  return (
    <div className="App">
      <div className='container'>
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch}></TicketForm>
      </div>
    </div>
  );
}

export default App;
