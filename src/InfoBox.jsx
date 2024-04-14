import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SevereColdIcon from '@mui/icons-material/AcUnit';
import './InfoBox.css';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1691848746401-b40fdd5d823f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYXIlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL = "https://images.unsplash.com/photo-1498511133332-ad66b117f533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhPVCUyMFRFTVBSQVRVUkV8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://media.istockphoto.com/id/1766599904/photo/sad-middle-age-couple-in-warm-clothes-getting-cold-on-the-sofa-in-their-living-room.webp?b=1&s=170667a&w=0&k=20&c=4lt1AgV4JZi8yXfkKtKBtQt8OFrz8L-YbR9WIdy_bb4=";
    const RAIN_URL = "https://images.unsplash.com/photo-1619260584294-8a4e63f5ade5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";

    if (!info) return null; // Return null if info is not defined

    return (
        <div className='crddddd'>
            <div className="InfoBox_first_day">
                <h1>1st day Weather Info -{info.forcast_one_day.weather}</h1>
                <div className='cardcontainer'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={info.forcast_one_day.humid > 50 ? RAIN_URL : (info.forcast_one_day.real_temp > 22 ? HOT_URL : COLD_URL)}
                            title="Weather Image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.forcast_one_day.city}
                                {info.forcast_one_day.humid > 50 ? <BeachAccessIcon /> : (info.forcast_one_day.real_temp > 22 ? <WbSunnyIcon /> : <SevereColdIcon />)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component={"span"}>
                                <p>Temperature: {info.forcast_one_day.real_temp}&deg;C</p>
                                <p>Humidity: {info.forcast_one_day.humid}</p>
                                <p>Weather: {info.forcast_one_day.weather}</p>
                                <p>Feels Like: {info.forcast_one_day.feels_like}&deg;C</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
    
            <div className="InfoBox_sec_day">
                <h1>2nd day Weather Info -{info.forcast_sec_day.weather}</h1>
                <div className='cardcontainer'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={info.forcast_sec_day.humid > 50 ? RAIN_URL : (info.forcast_sec_day.real_temp > 20 ? HOT_URL : COLD_URL)}
                            title="Weather Image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.forcast_sec_day.city}
                                {info.forcast_sec_day.humid > 50 ? <BeachAccessIcon /> : (info.forcast_sec_day.real_temp > 22 ? <WbSunnyIcon /> : <SevereColdIcon />)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component={"span"}>
                                <p>Temperature: {info.forcast_sec_day.real_temp}&deg;C</p>
                                <p>Humidity: {info.forcast_sec_day.humid}</p>
                                <p>Weather: {info.forcast_sec_day.weather}</p>
                                <p>Feels Like: {info.forcast_sec_day.feels_like}&deg;C</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
    
            <div className="InfoBox_third_day">
                <h1>3rd day Weather Info -{info.forcast_third_day.weather}</h1>
                <div className='cardcontainer'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={info.forcast_third_day.humid > 50 ? RAIN_URL : (info.forcast_third_day.real_temp > 22 ? HOT_URL : COLD_URL)}
                            title="Weather Image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.forcast_third_day.city}
                                {info.forcast_third_day.humid > 50 ? <BeachAccessIcon /> : (info.forcast_third_day.real_temp > 22 ? <WbSunnyIcon /> : <SevereColdIcon />)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component={"span"}>
                                <p>Temperature: {info.forcast_third_day.real_temp}&deg;C</p>
                                <p>Humidity: {info.forcast_third_day.humid}</p>
                                <p>Weather: {info.forcast_third_day.weather}</p>
                                <p>Feels Like: {info.forcast_third_day.feels_like}&deg;C</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

