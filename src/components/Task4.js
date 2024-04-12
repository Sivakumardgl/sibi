import React from 'react'

export default function Task4() {
  const [display, setDisplay] = useState('');
  
  const handleInput = (value) => {
    setDisplay(display + value);
  };

  const calculateResult = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
  };
  return (
    <div>
      <input type="text" value={display} readOnly />
      <br />
      <button onClick={() => handleInput('1')}>1</button>
      <button onClick={() => handleInput('2')}>2</button>
      <button onClick={() => handleInput('3')}>3</button>
      <button onClick={() => handleInput('+')}>+</button>
      <br />
      <button onClick={() => handleInput('4')}>4</button>
      <button onClick={() => handleInput('5')}>5</button>
      <button onClick={() => handleInput('6')}>6</button>
      <button onClick={() => handleInput('-')}>-</button>
      <br />
      <button onClick={() => handleInput('7')}>7</button>
      <button onClick={() => handleInput('8')}>8</button>
      <button onClick={() => handleInput('9')}>9</button>
      <button onClick={() => handleInput('')}></button>
      <br />
      <button onClick={() => handleInput('0')}>0</button>
      <button onClick={() => handleInput('.')}>.</button>
      <button onClick={calculateResult}>=</button>
      <button onClick={() => handleInput('/')}>/</button>
      <br />
      <button onClick={clearDisplay}>Clear</button>
    </div>
  );
}
