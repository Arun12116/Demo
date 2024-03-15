
import { useState } from 'react';
import './App.css';

function App() {
  const [cahnge, setChange] = useState("")
  const [update, setUpdate] = useState<string>("")


  const handleChange = () => {

    setUpdate("hello")

  }
  return (
    <div className="App">
      {/* <h1>hello</h1>

      {/* <div>
        <input type="text" placeholder='enter a name' name='username' id='1' />

      </div> */}

      <input type="text" value={cahnge} onChange={(e) => { setChange(e.target.value) }} />

      <button onClick={handleChange}>login</button>

      <h1>{update}</h1>


      <button disabled>submit</button>


      <label htmlFor="male">Male</label>
      <input type="checkbox" id='male' defaultChecked />



      {/* <input type="text" placeholder='enter a name' /> */}


    </div>
  );
}

export default App;
