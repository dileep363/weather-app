import React,{useState} from 'react';
import SearchBox from "./SearchBox";
import Infobox from './Infobox';

const WeatherApp = () => {
    const [weather,setWeather]=useState({
        city:"Delhi",
        feels_like:20.12,
        humidity:35,
        temperature:21.05,
        tempMin:21.05,
        tempMax:21.05,
        description:"haze",
    });
    const updateInfo=(result)=>{
        setWeather(result);
    }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Weather app</h1><br />
      <SearchBox updateInfo={updateInfo}/>
      <Infobox info={weather}/>
    </div>
  )
}

export default WeatherApp
