import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import { useState } from 'react';
import CountryComponent from './modules/CountryComponent'
import CityComponent from './modules/CityComponent';
import WeatherComponent from './modules/WeatherInfoComponent';

const API_KEY = "8692d05e8ac74951fa46bb4279dadd19";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

const App: React.FC=()=> {
  const [country, setCountry] = useState<any>();
  const [capital, updataCapital] = useState<boolean>(false);
  const [city,updateCity]=useState<string>('')
  const [weather, updateWeather] = useState<any>();
  const fetchWeather= async (e:React.FormEvent) => {
    e.preventDefault();
    const res = await axios.get(`https://restcountries.com/v3.1/name/${city}`);
    setCountry(res.data[0]);
    console.log(res.data);
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    updateWeather(response.data);
  };
  console.log(weather);

  return (
    <Container>
       <AppLabel>React Weather App</AppLabel>
       {capital?(
       <WeatherComponent weather={weather} city={city}  />):
       city && weather ?
      ( <CountryComponent  
          country={country}
          updateCity={updateCity}
          updataCapital={updataCapital} />):(
      <CityComponent updateCity={updateCity} city={city} fetchWeather={fetchWeather}/>)}
    </Container>
  );
}

export default App;
