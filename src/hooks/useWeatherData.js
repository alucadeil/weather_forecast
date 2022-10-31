import { useGetCityForecastQuery } from '../store/api/weatherApi';

export const useWeatherData = city => {
  const { data, isLoading, isFetching } = useGetCityForecastQuery(city, { skip: !city?.lat });
  const isDataLoading = isLoading || isFetching;
  return { data, isDataLoading };
};
