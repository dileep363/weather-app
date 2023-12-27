import React from 'react'
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';
import "./SearchBox.css";
import {useState} from 'react';
const SearchBox = ({updateInfo}) => {

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="<enter your api key >";

    const [city,setCity]=useState("");
    const [error,setError]=useState(false);

    const getWeatherData=async ()=>{
        try{
            const url=`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
            const response=await fetch(url);
            const data=await response.json();
            console.log(data);
            let result={
                city:city,
                feels_like:data.main.feels_like,
                humidity:data.main.humidity,
                temperature:data.main.temp,
                tempMin:data.main.temp_min,
                tempMax:data.main.temp_max,
                description:data.weather[0].description,

            }
            return result;
        }catch(error){
            throw(error);
        }
    }

    const handleSubmit=async (e)=>{
        try{
            e.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherData();
            updateInfo(newInfo);
            setError(false);
        }catch(error){
            setError("No such City in the API");
        }
        


    }
  return (
    <div className="searchbox">
         
        <br />
        <form onSubmit={(e)=>handleSubmit(e)}>
            <TextField 
            id='outlined-basic' 
            label="Search" 
            variant='outlined' 
            required 
            value={city} 
            onChange={(e)=>{setCity(e.target.value)}}/>
            <br /><br />
            <Button 
            variant='contained' 
            type='submit'>Search</Button>
        </form>
        {error && <p style={{color:"red"}}>No such place exists!</p>}
        <br />
        <hr />
    </div>
  )
};

export default SearchBox;
