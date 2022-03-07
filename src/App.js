
import './App.css';
import {useState,useEffect, } from 'react'
import useFetch from './useFetch'
  
  function App(){
    const [data]=useFetch("https://api.github.com/users/fgoudarzi")
    console.log(data)
    return (
      <div className="App">
        {data && data.login}
      </div>
    );
  }
 
export default App;
