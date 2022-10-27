import CityPicker from '../cityPicker';
import { cities } from '../../constants/cities';

const Header = () => {
  return (
    <header>
      <CityPicker cities={cities} />
    </header>
  );
};

export default Header;
