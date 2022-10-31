import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useGetCitiesQuery, useGetCityDataQuery } from '../store/api/weatherApi';

export const useCityData = () => {
  const { city } = useParams();
  const [searchCity, setSearchCity] = useState(null);
  const navigate = useNavigate();

  const handleSearchButtonClick = value => {
    setSearchCity(value);
  };

  const handleCityClick = city => {
    const { name } = city;
    navigate(`/in/${name}`);
  };

  const {
    data: initData,
    isLoading: isInitDataLoading,
    isFetching: isInitDataFetching,
    isError: isInitError,
    error: initError
  } = useGetCityDataQuery({ city }, { skip: !city });
  const {
    data: searchData,
    isLoading: isSearchDataLoading,
    isFetching: isSearchDataFetching,
    isError: isSearchError,
    error: searchError
  } = useGetCitiesQuery({ city: searchCity }, { skip: !searchCity });

  const isInitLoading = isInitDataLoading || isInitDataFetching;
  const isSearchLoading = isSearchDataLoading || isSearchDataFetching;
  const error = initError || searchError;
  const isError = isInitError || isSearchError;

  return {
    initData,
    searchData,
    isInitLoading,
    isSearchLoading,
    isError,
    error,
    handleSearchButtonClick,
    handleCityClick
  };
};
