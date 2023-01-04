import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

type WeatherButtonProps = {
  cities: string[];
};
const WeatherButton: React.FC<WeatherButtonProps> = ({ cities }) => {
  console.log("city", cities);
  return (
    <WeatherButtonContainer>
      <Button variant="outline-dark">Current</Button>
      {cities.map((item) => (
        <Button key={item} variant="outline-dark">
          {item}
        </Button>
      ))}
    </WeatherButtonContainer>
  );
};
const WeatherButtonContainer = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  margin: 20px;
  button {
    margin: 1em;
  }
`;
export default WeatherButton;
