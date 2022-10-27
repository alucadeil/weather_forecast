import PropTypes from 'prop-types';
import City from './city';

const CityPicker = props => {
  const { cities, onCityClick } = props;

  const handleCityClick = (e, townName) => {
    e.preventDefault();
    if (onCityClick) onCityClick(townName);
  };

  return (
    <div className="flex justify-center p-3 gap-5 shadow-md">
      {cities?.map(city => (
        <City key={city.id} city={city} onClick={handleCityClick} />
      ))}
    </div>
  );
};

CityPicker.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ),
  onCityClick: PropTypes.func
};

export default CityPicker;
