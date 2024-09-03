import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  // const [philasto, setPhilasande] = useState("");

  let philasande;

  

  useEffect(() => {
    //Runs only on the first render
    axios.get("http://localhost:5000/").then((response)=>{
    philasto=  response.data 
    console.log(philasto, "my Var");

    }).catch((error)=>{
      console.log("this is Error",error);
    })
  }, []);

  // console.log(philasto,"mfanawam")
  // console.log("llll");
  
  
  return (
    <>
      <h1>
        {philasande}
      </h1>
    </>
  )
}

export default App
