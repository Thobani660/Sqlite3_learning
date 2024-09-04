import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import Users from './component/card';
import Card from './component/card';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [philasto, setPhilasto] = useState({});
  // let philasto;

  useEffect(() => {
    //Runs only on the first render
    axios.get("http://localhost:5000/users").then((response)=>{
      setPhilasto(response.data);
      // philasto = response.data;
      console.log(response.data.Title, "my Var");

    }).catch((error)=>{
      console.log("this is Error",error);
    })
  }, []);

  return (
    <>
        {/* <BrowserRouter> */}
      {/* <Routes> */}
        {/* <Route path='/' element={<Layout/>}> */}
        {/* <Route index element={<Home/>}/> */}
        {/* <Route path='Card' element={<TrafficLight/>}/> */}
        {/* <Route path='Register' element={<Exercises/>}/> */}
        {/* <Route path='NoPage' element={<NoPage/>}/> */}
        {/* <Route path='todolist' element={<TodoList/>}/> */}
        {/* <Route path='register' element={<Register/>}/> */}

        {/* </Route>
      </Routes>
    </BrowserRouter> */}
      <h1>
        
       Title : {philasto.name}<br></br>
       Publisher : {philasto.name} {philasto.surname}
      </h1>
      <br />
      <Card></Card>

      {/*   */}

      {/* app.get( '/', (req , res) => {
    const book = {id: 2023, 
                  Title:"Philasande",
                  Publisher:"SamkeloZondi",
                  
                }
    res.json(book);
    res.send('Philasto ');
})

app.get("/test", (req, res) => {
    res.send("test is working")
}) */}
    </>
  )
}

export default App