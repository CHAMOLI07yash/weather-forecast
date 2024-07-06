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
    
          console.log(jsonresponse);
        var time = new Date();
    
        let result = {
            forcast_one_day: {
                real_temp: jsonresponse.forecast.forecastday[0].hour[time.getHours()].temp_c,
                feels_like: jsonresponse.forecast.forecastday[0].hour[time.getHours()].feelslike_c,
                humid: jsonresponse.forecast.forecastday[0].hour[time.getHours()].humidity,
                weather: jsonresponse.forecast.forecastday[0].hour[time.getHours()].condition.text,
                city:jsonresponse.location.name,
                rajya:jsonresponse.location.region,
                adhiktam_tapman: jsonresponse.forecast.forecastday[0].day.maxtemp_c,
                nyuntam_tapman: jsonresponse.forecast.forecastday[0].day.mintemp_c,
                last_dated:jsonresponse.forecast.forecastday[0].date,
                visiblity_km:jsonresponse.forecast.forecastday[0].day.avgvis_km,
                wind_speed:jsonresponse.forecast.forecastday[0].day.maxwind_kph,
                suryaudaye:jsonresponse.forecast.forecastday[0].astro.sunrise,
                suryasth:jsonresponse.forecast.forecastday[0].astro.sunset,
            },
            forcast_sec_day: {
                real_temp: jsonresponse.forecast.forecastday[1].hour[time.getHours()].temp_c,
                feels_like: jsonresponse.forecast.forecastday[1].hour[time.getHours()].feelslike_c,
                humid: jsonresponse.forecast.forecastday[1].hour[time.getHours()].humidity,
                weather: jsonresponse.forecast.forecastday[1].hour[time.getHours()].condition.text,
                city:jsonresponse.location.name, 
                rajya:jsonresponse.location.region,
                adhiktam_tapman: jsonresponse.forecast.forecastday[1].day.maxtemp_c,
                nyuntam_tapman: jsonresponse.forecast.forecastday[1].day.mintemp_c,
                last_dated:jsonresponse.forecast.forecastday[1].date,
                visiblity_km:jsonresponse.forecast.forecastday[1].day.avgvis_km,
                wind_speed:jsonresponse.forecast.forecastday[1].day.maxwind_kph,
                suryaudaye:jsonresponse.forecast.forecastday[1].astro.sunrise,
                suryasth:jsonresponse.forecast.forecastday[1].astro.sunset,



            },
            forcast_third_day: {
                real_temp: jsonresponse.forecast.forecastday[2].hour[time.getHours()].temp_c,
                feels_like: jsonresponse.forecast.forecastday[2].hour[time.getHours()].feelslike_c,
                humid: jsonresponse.forecast.forecastday[2].hour[time.getHours()].humidity,
                weather: jsonresponse.forecast.forecastday[2].hour[time.getHours()].condition.text,
                city:jsonresponse.location.name, 
                rajya:jsonresponse.location.region,
                adhiktam_tapman: jsonresponse.forecast.forecastday[2].day.maxtemp_c,
                nyuntam_tapman: jsonresponse.forecast.forecastday[2].day.mintemp_c,
                last_dated:jsonresponse.forecast.forecastday[2].date,
                visiblity_km:jsonresponse.forecast.forecastday[2].day.avgvis_km,
                wind_speed:jsonresponse.forecast.forecastday[2].day.maxwind_kph,
                suryaudaye:jsonresponse.forecast.forecastday[2].astro.sunrise,
                suryasth:jsonresponse.forecast.forecastday[2].astro.sunset,

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