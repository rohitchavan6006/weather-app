import { useState } from 'react';
import './App.css'

function App() {

async function sendReq() {
    const cityInput = document.getElementById("my-input").value;
   
    console.log("sending req", cityInput);
  
    const api =
      `http://api.weatherstack.com/current?accesskey=79e322714edacac1665e7ee8f44a09c1&query=${cityInput}`;

    const res = await fetch(api);

    const data = await res.json();

    console.log(data)
  }

  return (
    <div className="container">
       <h1>Weather application</h1>

    <div className="weather-input">
      <input type="text" placeholder="Enter a city" id="my-input" />
      <button onClick={() => sendReq()}>Search</button>
    </div>

    <div className="weather-data">
      <h2>Weather data: </h2>
      <div>temprature : 23C </div>
    </div>
  </div>
  );
}

export default App
