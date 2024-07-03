import { useState, useEffect } from 'react';
import './App.css';

function App() {

  // const [value, setValue] = useState('');

  const handleClick = (e) => {
    const value = e.target.value;
    console.log(value);
  }

  const handleClear = () => {

  }
  
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={0} readOnly />
          </div>
          <div className="firstrow">
            <input type="button" value="AC" onClick={handleClear} />
            <input type="button" value="+/-" onClick={handleClick} />
            <input type="button" value="%" onClick={handleClick} />
            <input type="button" value="÷" onClick={handleClick} className="divide-btn" />
          </div>
          <div>
            <input type="button" value="7" onClick={handleClick} />
            <input type="button" value="8" onClick={handleClick} />
            <input type="button" value="9" onClick={handleClick} />
            <input type="button" value="×" onClick={handleClick} className="multiply-btn" />
          </div>
          <div>
            <input type="button" value="4" onClick={handleClick} />
            <input type="button" value="5" onClick={handleClick} />
            <input type="button" value="6" onClick={handleClick} />
            <input type="button" value="−" onClick={handleClick} className="minus-btn" />
          </div>
          <div>
            <input type="button" value="1" onClick={handleClick} />
            <input type="button" value="2" onClick={handleClick} />
            <input type="button" value="3" onClick={handleClick} />
            <input type="button" value="+" onClick={handleClick} className="plus-btn" />
          </div>
          <div>
            <input type="button" className="numberoh" value="0" onClick={handleClick} />
            <input type="button" value="." onClick={handleClick} />
            <input type="button" value="=" onClick={handleClick} className="equal-btn" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
