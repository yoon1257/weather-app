import React, { SetStateAction } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

type WeatherButtonProps = {
  cities: string[];
  setCity: React.Dispatch<SetStateAction<string>>;
};
const WeatherButton: React.FC<WeatherButtonProps> = ({ cities, setCity }) => {
  return (
    <WeatherButtonContainer>
      <Button variant="outline-dark">Current</Button>
      {cities.map((item, index) => (
        <Button
          key={index}
          variant="outline-dark"
          onClick={() => setCity(item)}
        >
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
