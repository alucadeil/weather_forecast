import { useGetCityForecastQuery } from '../store/api/weatherApi';

export const useWeatherData = city => {
  const { data, isLoading, isFetching, isError, error } = useGetCityForecastQuery(city, {
    skip: !city?.lat
  });
  const isDataLoading = isLoading || isFetching;
  return { data, error, isDataLoading, isError };
};
