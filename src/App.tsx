import React, { useEffect } from "react";
import "./App.css";
import styled from "styled-components";

//해야할일
//1. 앱이 실행되자마자 현재기반의 날짜가 보인다
//2. 날씨 정보에는 섭씨, 화씨, 날씨상태
//3. 5개 버튼이 존재한다.
//4. 도시별 날씨가 나온다.
//5. 현재위치 기반의 날씨가 나온다.
//6.로딩스피너

const App: React.FC = () => {
  // 현재위치
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat: number, lon: number) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2fddad335d6c9dbe0ad6924ec2b30d72`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []); // 랜더를 하고 나서 바로 실행된다.

  return <WeatherContainer>hi</WeatherContainer>;
};

const WeatherContainer = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2018/06/21/13/57/clouds-3488632__340.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
export default App;
