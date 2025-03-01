import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //let counter=10
  let [counter,chaizCounter]=useState(15)
  const addvalues=()=>{
    console.log('clicked',counter);
       chaizCounter(counter+1)
    
  }
  const removevalues=()=>{
    console.log('clicked',counter-1);
    chaizCounter(counter-1)
  }
  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value :{counter}</h2>
     <button onClick={addvalues}>add value{counter} </button><br/>
      <button onClick={removevalues}>remove value{counter}</button> 
      <p>footer:{counter}</p>
    </>
  )
}

export default App
