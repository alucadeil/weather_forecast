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
    isFetching: isInitDataFetching
  } = useGetCityDataQuery({ city }, { skip: !city });
  const {
    data: searchData,
    isLoading: isSearchDataLoading,
    isFetching: isSearchDataFetching
  } = useGetCitiesQuery({ city: searchCity }, { skip: !searchCity });

  const isInitLoading = isInitDataLoading || isInitDataFetching;
  const isSearchLoading = isSearchDataLoading || isSearchDataFetching;

  return {
    initData,
    searchData,
    isInitLoading,
    isSearchLoading,
    navigate,
    handleSearchButtonClick,
    handleCityClick
  };
};
