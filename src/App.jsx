
import './App.css';
import React, { useState } from 'react';

 function Contador(){
  const [count, setCount] = useState(0);
 
  const incrementarCount = () => {
    if (count <10) {
      setCount (count + 1);
    }
  };

  const decrementarCount = () => {
    if (count >0 ) {
      setCount (count - 1);
    }
  };


 
  return (

    <div className='App'>
      <p>{count}</p>
      <button onClick={incrementarCount}>+</button>
      <button onClick={decrementarCount}>-</button>
    </div>
  )
 }

export default Contador;
