import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    const ID="5abadf886f0742d7935124914241404";




    let gatherClimateInfo = async () => {
        let data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${ID}&q=${city}&days=3&aqi=no&alerts=no`);
        let jsonresponse = await data.json();
    
        //   console.log(jsonresponse);
        var time = new Date();
    
        let result = {
            forcast_one_day: {
                real_temp: jsonresponse.forecast.forecastday[0].hour[time.getHours()].temp_c,
                feels_like: jsonresponse.forecast.forecastday[0].hour[time.getHours()].feelslike_c,
                humid: jsonresponse.forecast.forecastday[0].hour[time.getHours()].humidity,
                weather: jsonresponse.forecast.forecastday[0].hour[time.getHours()].condition.text,
                city:jsonresponse.location.name
            },
            forcast_sec_day: {
                real_temp: jsonresponse.forecast.forecastday[1].hour[time.getHours()].temp_c,
                feels_like: jsonresponse.forecast.forecastday[1].hour[time.getHours()].feelslike_c,
                humid: jsonresponse.forecast.forecastday[1].hour[time.getHours()].humidity,
                weather: jsonresponse.forecast.forecastday[1].hour[time.getHours()].condition.text,
                city:jsonresponse.location.name

            },
            forcast_third_day: {
                real_temp: jsonresponse.forecast.forecastday[2].hour[time.getHours()].temp_c,
                feels_like: jsonresponse.forecast.forecastday[2].hour[time.getHours()].feelslike_c,
                humid: jsonresponse.forecast.forecastday[2].hour[time.getHours()].humidity,
                weather: jsonresponse.forecast.forecastday[2].hour[time.getHours()].condition.text,
                city:jsonresponse.location.name

            }
        }
    
        console.log(result)
        return result;
    }
    
    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        let newinfo = await gatherClimateInfo()
        updateInfo(newinfo)
        setCity("")
    }
    


    let handleChange =(event)=>{
        setCity(event.target.value)

    }

    return(
        <div  className='SearchBox'>
                
           
            
            <form onSubmit={handleSubmit} >
            <TextField id="city" label="City Name" variant="outlined"  required  value={city}
            onChange={handleChange}
            />
            <br></br>
            <br></br>
        
            <Button variant="contained" endIcon={<SendIcon />}>
            Search
        </Button>

        
            </form>
            <br></br>
        </div>
    )
    
}