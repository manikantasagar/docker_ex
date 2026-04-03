import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'



function App() {
  const [emails, setEmail] = useState('hello')
  const[pwd, setPwd] = useState('')
  
  useEffect(() => {
    const serv = async () => {
      console.log(import.meta.env.url_1);
      const det = await axios.post(import.meta.env.VITE_URL_1, {
        email:  emails 
      })
      console.log("called11");
      // const clear_det=await det.json()
      setPwd(det.data.pw)
    }
    serv();
  },[emails])

  return (
    <div className='home'>
      <input type="text" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
      <br/>
       {/* <h1>{emails}</h1> */}
       <h1>{pwd}</h1>
    </div>
     )
}

export default App
