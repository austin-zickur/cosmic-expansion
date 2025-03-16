import { useState } from 'react'
import './index.css'

function App() {
  const [bgColor, setBgColor]= useState(null);

  return (
    <>
    <div style={{backgroundColor:bgColor}}>
    <button onClick={()=>{setBgColor("blue")}}>change BG</button>
    </div>
  
    </>
  )
}

export default App
