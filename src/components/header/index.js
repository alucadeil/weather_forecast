import { useSelector } from 'react-redux';
import { getDefaultCity } from '../../store/selectors/location';
import { useGeolocation } from '../../hooks/useGeolocation';
import { useDefaultCity } from '../../hooks/useDefaultCity';

const Header = () => {
  const { position } = useGeolocation();
  useDefaultCity(position);

  const defaultCity = useSelector(getDefaultCity);

  return (
    <header>
      <div className="flex justify-center p-3 gap-5 shadow-md">
        <div>Your location:</div>
        <div>{defaultCity}</div>
      </div>
    </header>
  );
};

export default Header;
