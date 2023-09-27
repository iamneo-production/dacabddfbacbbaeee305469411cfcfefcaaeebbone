import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName]=useState('');
  const [greeting,setGreeting] = useState('');
  const handleChange=(e)=>{
       setName(e.target.value);
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      setGreeting(`Hello: ${name}`);
  }
  return (
    <div className="App">
      <h1>Hey!! Greeting</h1>
      <form test-id="form" onSubmit={handleSubmit}>
        <label data-testid="label">Enter your name</label>
        <input placeholder='User' value={name} onChange={handleChange}/>
        <button className='btn' test-id="buttonElement" type='submit'>Say Hello</button>
      </form>
      {greeting && <h2>{setGreeting}!</h2>}
    </div>
  );
}

export default App;
