import React, {useState} from 'react'
import './styles/App.css';
import Counter from "./Components/Counter";

function App1() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <Counter/>
      <h1>{value}</h1>
      <input type='text'
             value={value}
             onChange={event => {setValue(event.target.value)}}
      />
    </div>
  );
}

export default App1;
