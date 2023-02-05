import React from "react";
import Button from "@mui/material/Button";
interface countryProps{
    country:{
        flags:{
            png:string;
        }
        capital:string;
        population:number;
        latlng:number[];
    };
    updateCity:React.Dispatch<React.SetStateAction<string>>;
    updataCapital:React.Dispatch<React.SetStateAction<boolean>>;
    }
const CountryComponent: React.FC<countryProps>=({country,updateCity,updataCapital})=>{
  console.log(country.capital)
  const update = (e:React.FormEvent) => {
    updateCity(country.capital);

    updataCapital(true);
  };
    return( <>
         <img src={country.flags.png} alt="img"></img>
        <h3>Capital: {country.capital}</h3>
        <h3>Country's Population: {country.population} </h3>
        <h3>Latitude: {country.latlng[0]}</h3>
        <h3>Lognitude: {country.latlng[1]}</h3>
        <Button variant="contained" type="submit" onClick={update}>
          Capital Weather
        </Button>
      </>)

}
export default CountryComponent;