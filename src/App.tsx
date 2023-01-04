import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "components/WeatherBox";
import WeatherButton from "components/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";
import { IWeather } from "interface";

//해야할일
//1. 앱이 실행되자마자 현재기반의 날짜가 보인다
//2. 날씨 정보에는 섭씨, 화씨, 날씨상태
//3. 5개 버튼이 존재한다.
//4. 도시별 날씨가 나온다.
//5. 현재위치 기반의 날씨가 나온다.
//6.로딩스피너

const App: React.FC = () => {
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const cities = ["Paris", "New york", "Tokyo", "Seoul"];
  // 현재위치
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat: number, lon: number) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2fddad335d6c9dbe0ad6924ec2b30d72&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2fddad335d6c9dbe0ad6924ec2b30d72&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]); // 랜더를 하고 나서 바로 실행된다.

  return (
    <WeatherContainer>
      {loading ? (
        <ClipLoader
          color="#f88c6b"
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <WeatherBox weather={weather} />
      )}

      <WeatherButton cities={cities} setCity={setCity} />
    </WeatherContainer>
  );
};

const WeatherContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default App;
