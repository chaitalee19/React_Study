import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
let myObj ={
  username:"cghurde007",
  pw:"1234"
}
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>chaitalee</h1>

     {/* <Card username={myObj}/> */}
     <Card username= "chaitalee" btntext="Click Me"/>
     <Card username= "vaishali" />


      
    </>
  )
}

export default App
