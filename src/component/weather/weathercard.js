import React,{useEffect, useState} from 'react'

const Weathercard = ({tempinfo}) => {
    const [weatherState, setWeatherState]= useState("");
    const {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset
    }= tempinfo;
    // Converting seconds into time 
    let sec= sunset; // This will give the time in seconds when we will get the sunset 
    let date= new Date(sec* 1000); // This will convert the time in seconds to milliseconds
    let time_str= `${date.getHours()}:${date.getMinutes()}`; //This is to convert the seconds directly into normal time
    
    useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case "Clouds" :
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Haze" :
                    setWeatherState("wi-fog");
                    break;
                case "Clear" :
                    setWeatherState("wi-day-sunny");
                    break;
                case "Mist" :
                    setWeatherState("wi-day-storm-showers");
                    break;
                
                default:
                    setWeatherState("wi-day-sunny");  
            }
        }
    },[weathermood])
    




  return (
    <>
    <article className='widget'>
        <div className='weatherIcon'>
            <i className={`wi ${weatherState}`}></i>
        </div>

        <div className='weatherInfo'>
            <div className='temperature'>
                <span> {temp}&deg;</span>
            </div>

            <div className='description'>
                <div className='weathercondition'> {weathermood} </div>
                <div className='place'> {name}, {country} </div>
            </div>
        </div>
        <div className='date'> {new Date().toLocaleString()}</div>

        {/* Our 4 column section , This is to create a 4 member section below the temperature time date row */} 
        <div className='extra-temp'>
            <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                {/* Here above we have given a class name two-sided-section inorder to seperate two sections one for widgets and other for text we have to write  */}
                    <p> 
                       <i className='wi wi-sunset'> 
                       {/* The above wi wi-sunset is used to add the sunset icon to the page  */}
                       </i> 
                    </p>
                    <p className='extra-info-leftside'>
                        {time_str}
                        <br/> 
                        {/* The break tag should be used as <br/> like this not like <br> this */}
                        sunset
                    </p>
                </div>

                <div className='two-sided-section'>
                    <p> 
                       <i className='wi wi-humidity'>
                       </i>
                    </p>
                    <p className='extra-info-leftside'>
                        {humidity}
                        <br/>
                        {/* The break tag should be used as <br/> like this not like <br> this */}
                        Humidity
                    </p>
                </div>
            </div>

            <div className='weather-extra-info'>
                
                <div className='two-sided-section'>
                    <p> 
                       <i className='wi wi-rain'>
                       </i>
                    </p>
                    <p className='extra-info-leftside'>
                        {pressure}
                        <br/> 
                        {/* The break tag should be used as <br/> like this not like <br> this */}
                        Pressure
                    </p>
                </div>


                <div className='two-sided-section'>
                    <p> 
                       <i className='wi wi-strong-wind'>
                       </i>
                    </p>
                    <p className='extra-info-leftside'>
                        {speed}
                        <br/> 
                        {/* The break tag should be used as <br/> like this not like <br> this */}
                        Speed
                    </p>
                </div>




            </div>            
        </div>
    </article>
    </>
  )
}

export default Weathercard