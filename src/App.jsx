import React, { useState } from 'react'
import './App.css'

let App = () => {
  let [count, setCount] = useState(0)
  let [num, setNum] = useState('')

  let Change = (e) => {
    setNum(e.target.value)
  }
  let Submit = () => {
    setCount(num) 
  }
let Reset = () => {
  setCount(0)
}
let Increase = () => {
 
  setCount(++count)
}
let Decrease = () => {
  
  setCount(--count)



}
  return (
    <>
      <div className="main">
        <h1>Enter the value</h1>
        <input type="number"value={num} onChange={Change} placeholder="Enter a number"
        />
        <button className="btn" onClick={Submit}>Submit</button>
      </div>

      <div className="main2">
        <h1>Output</h1>
        <h3>Count: {count}</h3>
        <button className='btn2' onClick={Increase}>Increase</button>
        <button className='btn3' onClick={Decrease}>Decrease</button>
        <button className='btn4' onClick={Reset}>Reset</button>
      </div>
    </>
  )
}

export default App
