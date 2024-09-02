import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // let counter = 55

  const addvalue = ()=>{
    if(count>=20){
      setCount(count)
    }else{
      setCount(count+1)
    }
  }
  const subtractvalue = ()=>{
    if(count===0){
      setCount(count)
    }else{
      setCount(count-1)
    }
  }
  return (
    <>
    <h1>Shubham Yadav</h1>
    <h3>Counter Value : {count}</h3>
    <button onClick={addvalue}>Add Value</button><br />
    <button onClick={subtractvalue}>Subtract Value</button>
    </>
  )
}

export default App
