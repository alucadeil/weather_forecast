import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { cities } from '../../constants/cities';

const apiKey = process.env?.REACT_APP_WEATHER_API_KEY;

// Number of cities come from api response

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org/geo/1.0/' }),
  endpoints: builder => ({
    getCityByCoordinates: builder.query({
      query: ({ latitude, longitude }) =>
        `reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${apiKey}`,
      transformResponse: response => {
        const city = response.find(city => city?.name)?.name || null;
        return city;
      }
    })
  })
});

export const { useGetCityByCoordinatesQuery } = weatherApi;
