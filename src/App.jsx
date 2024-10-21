import { useState } from 'react'
import './App.css'
import {
  Button
} from "@material-tailwind/react";
function App() {
  const [clr,setClr] = useState('white')
  
  return (
    <>
     <div className='w-full h-screen' style={{backgroundColor:clr}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
       <div className='flex flex-wrap justify-center gap-3  rounded-md'>
            <Button className='bg-orange-800 ' onClick={()=>setClr("orange")}>Orange</Button>
            <Button className='bg-blue-700' onClick={()=>setClr("blue")}>Blue</Button>
            <Button className='bg-green-700'onClick={()=>setClr("green")}>Green</Button>
            <Button className='bg-purple-800'onClick={()=>setClr("purple")}>purple</Button>
            <Button className='bg-black'onClick={()=>setClr('black')}>Black</Button>
       </div>
      </div>
     </div>
    </>
  )
}

export default App
