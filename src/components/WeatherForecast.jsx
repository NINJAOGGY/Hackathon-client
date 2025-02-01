import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherForecast = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchDefaultLocation = async () => {
      const defaultLocation = 'Jaipur';
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=8f1faadaace563cee858eeecce4b9b92`;
      const response = await axios.get(url);
      setData(response.data);
    };
    fetchDefaultLocation();
  }, []);

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=8f1faadaace563cee858eeecce4b9b92`;

    try {
      const response = await axios.get(url);
      if (response.data.cod !== 200) {
        setData({ notFound: true });
      } else {
        setData(response.data);
        setLocation('');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setData({ notFound: true });
      } else {
        console.log("An unexpected error occurred");
      }
    }
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const getWeatherIcon = (weatherType) => {
    switch (weatherType) {
      case 'Clear':
        return <i className='bx bxs-sun text-yellow-400 text-6xl'></i>;
      case 'Clouds':
        return <i className='bx bxs-cloud text-white text-6xl'></i>;
      case 'Rain':
        return <i className='bx bxs-cloud-rain text-blue-400 text-6xl'></i>;
      case 'Thunderstorm':
        return <i className='bx bxs-cloud-lightning text-blue-800 text-6xl'></i>;
      case 'Snow':
        return <i className='bx bxs-cloud-snow text-cyan-300 text-6xl'></i>;
      case 'Haze':
      case 'Mist':
        return <i className='bx bxs-cloud text-white text-6xl'></i>;
      default:
        return <i className='bx bxs-cloud text-white text-6xl'></i>;
    }
  };

  return (
    <div className='w-full min-w-[28rem] h-[45%] bg-gray-900 rounded-xl p-8 flex flex-col justify-center items-center gap-10'>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-2 text-white text-2xl font-bold'>
          <i className='fa-solid fa-location-dot'></i>
          <div>{data.name}</div>
        </div>
        <div className='relative'>
          <input 
            type='text' 
            placeholder='Enter location' 
            value={location} 
            onChange={handleInputChange} 
            onKeyDown={handleKeyDown} 
            className='w-[clamp(15rem,14cqi,25rem)] h-12 bg-transparent border-b border-gray-400 text-lg text-white outline-none'
          />
          <i className='fa-solid fa-magnifying-glass absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-xl cursor-pointer' onClick={search}></i>
        </div>
      </div>

      {data.notFound ? (
        <div className='text-white text-xl'>Not Found 🙁</div>
      ) : (
        <div className='flex flex-col items-center gap-6'>
          {data.weather && data.weather[0] && getWeatherIcon(data.weather[0].main)}
          <div className='text-lg text-white'>{data.weather ? data.weather[0].main : null}</div>
          <div className='text-2xl text-white'>{data.main ? `${Math.floor(data.main.temp)}°` : null}</div>
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;