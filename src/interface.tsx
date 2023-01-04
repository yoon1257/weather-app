export interface IWeather {
  name: string;
  main: ITemp;
  weather: ICloud[];
}
export interface ITemp {
  temp: number;
  humidity: number;
}

export interface ICloud {
  description: string;
}
