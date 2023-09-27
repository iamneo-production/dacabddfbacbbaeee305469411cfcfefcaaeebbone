import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName]=useState('');
  const [greet,setGreet] = useState('');
  const handleChange=(e)=>{
       setName(e.target.value);
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      setGreet(`Hello ${name}`);
  }
  return (
    <div className="App">
      <h1>Hey!! Greeting</h1>
      <form>
        <label id="data-testid">Enter your name</label>
        <input placeholder='User' name="fname" onChange={handleChange}/>
        <button className='btn' onClick={handleSubmit} type='submit'>Say Hello</button>
      </form>
      <h2>{ greet && }</h2>
    </div>
  );
}

export default App;
