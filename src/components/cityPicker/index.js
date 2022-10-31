import PropTypes from 'prop-types';
import City from './city';

const CityPicker = props => {
  const { cities, selectedCity, onCityClick } = props;

  const handleCityClick = (e, city) => {
    e.preventDefault();
    if (onCityClick) onCityClick(city);
  };

  return (
    <div className="flex flex-wrap justify-center p-3 gap-5 shadow-md rounded w-fit">
      {cities?.map(city => {
        const isSelected = selectedCity.name === city.name;
        return <City key={city.id} city={city} isSelected={isSelected} onClick={handleCityClick} />;
      })}
    </div>
  );
};

CityPicker.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      lat: PropTypes.number,
      lon: PropTypes.number
    })
  ),
  selectedCity: PropTypes.shape({
    name: PropTypes.string,
    lat: PropTypes.number,
    lon: PropTypes.number
  }),
  onCityClick: PropTypes.func
};

export default CityPicker;
