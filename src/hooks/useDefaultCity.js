import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetCityByCoordinatesQuery } from '../store/api/weatherApi';
import { setDefaultCity } from '../store/slices/locationSlice';

export const useDefaultCity = () => {
  const dispatch = useDispatch();
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    const handleSuccess = position => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    };
    const handleError = error => {
      console.warn(error);
    };
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  }, []);

  const { data } = useGetCityByCoordinatesQuery(position, {
    skip: !(position.latitude || position.longitude)
  });

  useEffect(() => {
    if (data) {
      dispatch(setDefaultCity(data));
    }
  }, [data]);
};
