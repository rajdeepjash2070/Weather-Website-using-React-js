import React, { useEffect, useState } from 'react'
import "../App.css";
const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Bardhaman");
  useEffect(()=>{
const fetchApi=async()=>{
  const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a755173bfda568ebc0aa12f99eb7f5fb`;
  const response=await fetch(url);
  //console.log(response);
  const resJson=await response.json();
  console.log(resJson);
  setCity(resJson.main);
};


    fetchApi();
  },[search])
  return (
    <div className="Weather">
      <div className="container">
        <div className="navbar">CURR WEATHER</div>
        <h1 className="header">Enter the City Name to Know Current weather</h1>
        <div className="searchicon"><i className="fa fa-search"></i></div>
       <input type="search" value={search} className="inputData" onChange={(event)=>{ setSearch(event.target.value) }}/>

       {
         !city?(<p> Enter a Valid City Name to get Current weather</p>):(
<div className="info">
<h1 className="location">{search}</h1>
<h2 className="temp">
Temperature :{city.temp} C
</h2>
<h2>Feels like:{city.feels_like}</h2>
<h2 className="tempmax">
 Maximum Temperature : {city.temp_max} C
</h2>
<h2 className="tempmin"> Minimum Temperature : {city.temp_min} C</h2>
<h2>Air Pressure:{city.pressure}</h2>
<h2>Air Humidity:{city.humidity}</h2>

</div>



         )}




      </div>
    </div>
  )
}

export default Weather
