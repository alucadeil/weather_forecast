import { useSelector } from 'react-redux';
import { getDefaultCity } from '../../store/slices/locationSlice';
import { useDefaultCity } from '../../hooks/useDefaultCity';

const Header = () => {
  useDefaultCity();

  const { name } = useSelector(getDefaultCity);

  return (
    <header>
      <div className="flex justify-center p-3 gap-5 shadow-md">
        <div>Your location:</div>
        <div>{name}</div>
      </div>
    </header>
  );
};

export default Header;
