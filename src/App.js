import React,{useState} from 'react';

import './App.css';

function App() {
  const [inputText, setInputText] = useState('');

  const handleChange=(e)=>{
    setInputText(e.target.value);
  }
  const convertUp=()=>{
    setInputText(inputText.toUpperCase());
  }
  const convertDown=()=>{
    setInputText(inputText.toLowerCase());
  }

  return (
    <div className="App">
      <div className="box">
      <h3>Please type words to convert UpperCase or Lower Case</h3><br />
      <textarea className='para'
      value={inputText}
      onChange={handleChange}
      /><br />
      <button className='btn' onClick={convertUp}>Convert To UpperCase</button>
      <button className='btn' onClick={convertDown}>Convert To LowerCase</button>

      </div>
    </div>
  );
}

export default App;
