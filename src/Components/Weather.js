import axios from 'axios';
import React, { useState } from 'react';
import './Weather.css';
import Footer from './Footer'
export default function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [icons,seticons]=useState()
 
  const apiKey = '143a78182370ac2f47368b4f0e83dddc';
// let img=`https://openweathermap.org/img/wn/${icon}@4x.png`
   
  const fetchWeatherData = () => {
    setLoading(true);
    axios
         
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
 
 
      .then((res) => {
        setWeatherData(res.data);
        setLoading(false);
        // seticons(res.weather)
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  };
 
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
 
  return (
    <body className='body'>
    <div className='container-fluid text-light' id='b'>
      <div className='row' id='c'>
        <div className='col-md-12'>
        <h1>Check Weather</h1>
        <input type='text' placeholder='Enter city name' onChange={handleInputChange} className='w-50 m-2' />
        <button type='button' onClick={fetchWeatherData} disabled={loading}>
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
        </div>
      </div>
 
      {weatherData.main && (
        <div className='weather-info' id='d'>
          <div className='row'>
            <div className='col-md-6'>
           
              <h1>{weatherData.icon}</h1>
              <h1 id="city"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e90707"><path d="M480.21-484q31.79 0 54.29-22.21t22.5-54q0-31.79-22.42-54.29t-54.5-22.5Q448-637 426-614.58t-22 54.5Q404-528 426.21-506t54 22ZM480-59Q308-201 223.5-320T139-555q0-159.72 103.04-253.86Q345.08-903 480-903q134.49 0 238.25 94.14Q822-714.72 822-555q0 116-85 235T480-59Z"/></svg>
              {city} 
              <p style={{paddingLeft:'50px'}} id="date">{new Date().toLocaleDateString()}</p></h1>
            </div>
            <div className='col-md-6 text-right'>
              <h1>Current Weather</h1>
              <hr />
            </div>
          </div>
 
          <div className='row'>
            <div className='col-md-4'>
              <h1 style={{paddingLeft:'100px',paddingTop:'30px',fontSize:'70px'}}>
                {Math.round(weatherData.main.temp - 273.15)}°C{' '}
                {weatherData.weather.map((item) => (
                  <h4 style={{paddingLeft:'30px'}} key={item.id}>{item.main}</h4>
                ))}
              </h1>
            </div>
            <div className='col-md-4'>
              <h2>
                Real Feel{' '}<h4><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#EA3323"><path d="M531-571v-79h261v79H531Zm0-139v-81h347v81H531ZM275.09-103q-85.32 0-143.71-58.36Q73-219.72 73-305q0-49.97 22.53-93.58 22.52-43.61 66.47-74.34V-746q0-48.75 31.94-81.38Q225.88-860 274.62-860q48.73 0 81.06 32.62Q388-794.75 388-746v273.08q43.48 30.8 66.24 74.53Q477-354.67 477-305q0 85.28-58.69 143.64Q359.62-103 275.09-103ZM164-305h222q0-43-21.2-74.89T310-427h-13v-319q0-8.65-7.01-15.32-7.01-6.68-15.32-6.68-8.9 0-14.78 6.68Q254-754.65 254-746v319h-12q-36.6 16.97-57.3 48.52Q164-346.94 164-305Z"/></svg>
                {'        '}
                  {Math.round(weatherData.main.feels_like - 273.15)}°C
                 
               
                </h4>
              </h2>
              <h2>
                Humidity <h4><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#16C6E9"><path d="M479.77-78Q338.4-78 238.2-175.88 138-273.77 138-414.99q0-67.8 27-130.4Q192-608 240-655l176-174q13.03-12.22 29.8-19.11 16.76-6.89 34.04-6.89 17.27 0 34.14 6.89Q530.86-841.22 544-829l176 174q48 47 75.5 109.55Q823-482.89 823-415q0 141.65-100.85 239.32Q621.31-78 479.77-78ZM229-415h502q0-46-19-91.5t-53.17-79.06L480-763 301.17-585.56Q267-552 248-506.39T229-415Z"/></svg>
                {'        '}
                  {weatherData.main.humidity}
                </h4>
              </h2>
            </div>
            <div className='col-md-4'>
              <h2>
                Wind<h4> <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#EE11D1"><path d="M448.88-89Q385-89 345.5-124.33 306-159.67 306-228h100q0 25 9 36t33.11 11q25.1 0 35-9.86 9.89-9.87 9.89-36.32 0-27.61-10.08-40.21Q472.85-280 449-280H71v-92h378q63.83 0 99.42 35.87Q584-300.25 584-228.5q0 67.5-35.62 103.5t-99.5 36ZM71-585v-92h541q33.87 0 49.43-16.38Q677-709.77 677-747.88 677-786 661.41-803q-15.6-17-50.1-17-35.5 0-50.9 19.57Q545-780.87 545-753h-92q0-72 44-115t114-43q69 0 113 42t44 121q0 79-44.11 121-44.1 42-111.89 42H71Zm665 384v-91q32 0 47-18.59 15-18.6 15-53 0-35.41-17.57-50.91-17.56-15.5-48.67-15.5H71v-91h660q68.79 0 113.39 41.5Q889-438 889-363.5q0 78.5-42.61 120.5-42.6 42-110.39 42Z"/></svg>
                {'        '}
                  {weatherData.wind.speed} m/s
                  </h4>
              </h2>
              <h2>
                Cloudiness<h4> <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#0000F5"><path d="M253-138q-94.94 0-163.47-67.22Q21-272.45 21-370.49q0-81.44 51-147.47Q123-584 204-597q22-100 100.05-162.5T482.31-822Q597-822 678.5-739.5T767-541v24q75 8 123.5 60.71Q939-403.59 939-327q0 79.08-54.96 134.04Q829.08-138 750-138H253Z"/></svg>
               
                 {weatherData.clouds.all}%
               
                </h4>
              </h2>
             
            </div>
          </div>
        </div>
      )}
    </div>
    </body>
  );
}
 


