import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetCityByCoordinatesQuery } from '../store/api/weatherApi';
import { setDefaultCity } from '../store/slices/locationSlice';

export const useDefaultCity = position => {
  const dispatch = useDispatch();
  const { data, isLoading, isUninitialized } = useGetCityByCoordinatesQuery(position, {
    skip: !(position.latitude || position.longitude)
  });

  useEffect(() => {
    if (data) {
      dispatch(setDefaultCity(data));
    }
  }, [data]);
};
