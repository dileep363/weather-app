import React from 'react';
import "./Infobox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
    
const Infobox = ({info}) => {
  const HOT_URL="https://media.istockphoto.com/id/993738504/photo/hot-summer-or-heat-wave-background-orange-sky-with-glowing-sun.jpg?s=612x612&w=0&k=20&c=YLm_DAHXYDrY1KdHvgp_zj0TX1XtRTWzScr1elC0wvs=";
  const COLD_URL="https://images.unsplash.com/photo-1519937010618-f8c8b7e135b7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZHxlbnwwfHwwfHx8MA==";
  const RAIN_URL="https://i.pinimg.com/originals/e0/8c/14/e08c1459386f9ef772e7829b061678cb.jpg";
    
  return (
    <div className='Infobox'>
      <h1>Weather Info-{info.description}</h1><br />
      <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80? RAIN_URL: (info.temperature>15)?HOT_URL:COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    {info.humidity>80 ? 
                    <ThunderstormIcon /> : info.temperature>15 ? <WbSunnyIcon /> : <AcUnitIcon />}
                    
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature:{info.temperature}&deg;C</p>
                        <p>Humidity:{info.humidity}</p>
                        <p>Min Temp:{info.tempMin}&deg;C</p>
                        <p>Max Temp:{info.tempMax}&deg;C</p>
                        <p>The Weather can be described as <i>{info.description}</i> feels like {info.feels_like}&deg;C</p>
                        
                    </Typography>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default Infobox;
