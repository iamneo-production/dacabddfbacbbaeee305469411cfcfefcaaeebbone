import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [name,setName]=useState('Praveen')
  return (
    <div className="App">
       <h1>
        Hello
       </h1>
    </div>
  );
}

export default App;
