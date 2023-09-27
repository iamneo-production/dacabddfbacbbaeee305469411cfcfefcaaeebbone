import logo from './logo.svg';
import './App.css';

function App() {
  const [name,setName]=useState('');
  const handleChange=(e)=>{
       setName(e.target.value);
  }
  return (
    <div className="App">
      <h1>Hey!! Greeting</h1>
      <form>
        <label id="data-testid">Enter your name</label>
        <input placeholder='User' name="fname" onChange={handleChange}/>
        <button className='btn' on>Say Hello</button>
      </form>
      <h2>Hello, {name}!</h2>
    </div>
  );
}

export default App;
