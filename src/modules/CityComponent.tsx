import styled from 'styled-components';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import img from '../icon/perfect-day.svg';

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px auto;
  & Button {
    left: 10px;
    width: 35%;
  }
`;
const ChooseCityLabel = styled.span`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;
const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

type Cityprops={
  updateCity:React.Dispatch<React.SetStateAction<string>>;
  city:string;
  fetchWeather:(e: React.FormEvent) => Promise<void>;
}
const CityComponent :React.FC<Cityprops>=({updateCity,city,fetchWeather}) => {
 
  return (<>
     <WeatherLogo src={img} alt='image'/>
    <ChooseCityLabel>Find Weather of your country</ChooseCityLabel>
    <SearchBox onSubmit={fetchWeather}>
    <TextField
          onChange={(e)=>updateCity(e.target.value)}
          id="outlined-text-input"
          label="Enter country"
          
        />
         <Button variant="contained" disabled={!city} type="submit">
          Submit
        </Button>
    </SearchBox>
  </>);
};
export default CityComponent;
