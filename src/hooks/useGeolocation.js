import { useEffect, useState } from 'react';

export const useGeolocation = () => {
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

  return { position };
};
