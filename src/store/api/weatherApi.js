import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { transformWeatherData, transformCitiesData } from './utils';

const apiKey = process.env?.REACT_APP_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org/' }),
  endpoints: builder => ({
    getCityByCoordinates: builder.query({
      query: ({ latitude, longitude }) =>
        `geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${apiKey}`,
      transformResponse: response => {
        try {
          if (response.length === 0) throw { isError: true, message: 'No city found' };
          const { name, lat, lon } = response.find(city => city?.name);
          const result = { name, lat, lon, isError: false };
          return result;
        } catch (e) {
          return e;
        }
      }
    }),
    getCityData: builder.query({
      query: ({ city }) => `/geo/1.0/direct?q=${city}&limit=1&units=metric&appid=${apiKey}`,
      transformResponse: response => {
        try {
          if (response.length === 0)
            throw { isError: true, message: 'No weather data for your city' };
          const { name, lat, lon } = response.find(city => city?.name);
          const result = { name, lat, lon, isError: false };
          return result;
        } catch (e) {
          return e;
        }
      }
    }),
    getCities: builder.query({
      query: ({ city }) => `/data/2.5/find?q=${city}&units=metric&appid=${apiKey}`,
      transformResponse: response => {
        try {
          return transformCitiesData(response);
        } catch (e) {
          return { ...e, isError: true, message: 'Error in getting citits data' };
        }
      }
    }),
    getCityForecast: builder.query({
      query: ({ lat, lon }) =>
        `/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=${apiKey}`,
      transformResponse: response => {
        try {
          return transformWeatherData(response);
        } catch (e) {
          return { ...e, isError: true, message: 'Error in getting forecast for city' };
        }
      }
    })
  })
});

export const {
  useGetCityByCoordinatesQuery,
  useGetCitiesQuery,
  useGetCityForecastQuery,
  useGetCityDataQuery
} = weatherApi;
