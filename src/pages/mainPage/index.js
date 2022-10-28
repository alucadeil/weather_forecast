import CityPicker from '../../components/cityPicker';
import { cities } from '../../constants/cities';

const MainPage = () => {
  const handleCityClick = city => {
    console.log(city);
  };

  return (
    <div>
      <div>
        <CityPicker cities={cities} onCityClick={handleCityClick} />
      </div>
    </div>
  );
};

export default MainPage;
