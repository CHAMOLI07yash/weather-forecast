import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
         forcast_one_day : {
            real_temp: 23.5,
            feels_like: 24.2,
            humid: 34,
            weather: 'Partly Cloudy',
            city: "London"
        },
    
         forcast_sec_day : {
            real_temp: 19,
            feels_like: 24.1,
            humid: 41,
            weather: 'Clear',
            city: "London"
        },
    
         forcast_third_day : {
            real_temp: 23.3,
            feels_like: 24.2,
            humid: 35,
            weather: 'Clear',
            city: "London"
        }
    });


    let updateInfo= (res)=>{
        setWeatherInfo(res)
    }


    return (
       <div style={{textAlign:"center"}}>
        <h1>Weather Forcast app by Yash Chamoli</h1>
                <SearchBox updateInfo={updateInfo}/>
                <InfoBox info={weatherInfo}/>
       </div>
    )
}