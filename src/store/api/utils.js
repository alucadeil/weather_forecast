import { worldDirections } from '../../constants/directions';

export const transformWeatherData = response => {
  const { current, daily, hourly } = response;
  const currentData = getWeatherFields(current);
  const dailyData = daily.map(getWeatherFields);
  const hourlyData = hourly.slice(0, 24).map(getWeatherFields);
  const result = {
    current: currentData,
    daily: dailyData,
    hourly: hourlyData,
    isError: false
  };
  return result;
};

const getWeatherFields = weatherData => ({
  temp: weatherData?.temp,
  date: new Date(weatherData?.dt * 1000).toLocaleDateString(),
  time: new Date(weatherData?.dt * 1000).toLocaleTimeString(),
  feelsLike: weatherData?.feels_like,
  windSpeed: weatherData?.wind_speed,
  windDirection: getDirectionByDeg(weatherData?.wind_deg),
  weather: weatherData?.weather,
  humidity: weatherData?.humidity
});

const getDirectionByDeg = (deg = 0) => {
  worldDirections;
  const degrees = (Math.round((deg * 8) / 360, 0) + 8) % 8;
  return worldDirections[degrees];
};

export const transformCitiesData = response => {
  const result = response.list.map(city => {
    const {
      name,
      id,
      main: { temp },
      sys: { country },
      coord: { lat, lon }
    } = city;
    return { name, lat, lon, id, country, temp, isError: false };
  });
  return result;
};
