import React from "react";
import styled from "styled-components";
import { IWeather } from "interface";

type WeatherBoxProps = {
  weather: IWeather | null;
};
const WeatherBox: React.FC<WeatherBoxProps> = ({ weather }) => {
  console.log("Weather", weather);
  return (
    <WeatherBoxContainer>
      <div>
        <h2>{weather?.name}</h2>
        <h3>{weather?.main.temp}C</h3>
        <h3>{weather?.weather[0].description}</h3>
        <h4>습도:{weather?.main.humidity}</h4>
      </div>
    </WeatherBoxContainer>
  );
};

const WeatherBoxContainer = styled.div`
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 50px;
  margin: 10px;
  text-align: center;
  background-color: rgba(156, 145, 145, 0.3);
`;
export default WeatherBox;
