import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLocation } from '../store/slices/locationSlice';

const handleError = error => {
  console.log(error);
};

export const useGeolocation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleSuccess = position => {
      const { latitude, longitude } = position.coords;
      dispatch(setLocation({ latitude, longitude }));
    };
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  }, []);
};
