import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CityPicker from '../../components/cityPicker';
import Weather from '../../components/weatherDashboard';
import { cities } from '../../constants/cities';
import {
  setSelectedCity,
  getSelectedCity,
  getCityForWeather
} from '../../store/slices/locationSlice';
import { Link } from 'react-router-dom';

const MainPage = props => {
  const { selectedCity, cityForWeather, setSelectedCity } = props;
  const handleCityClick = city => {
    setSelectedCity(city);
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-4 w-[min(1000px,_80vw)]">
        <CityPicker cities={cities} selectedCity={selectedCity} onCityClick={handleCityClick} />
        <Weather city={cityForWeather} />
        <div className={'p-1 rounded hover:bg-gray-100'}>
          <Link to={`/in/${cityForWeather.name}`}>Learn more</Link>
        </div>
      </div>
    </div>
  );
};

MainPage.propTypes = {
  selectedCity: PropTypes.shape({
    name: PropTypes.string,
    lat: PropTypes.number,
    lon: PropTypes.number
  }),
  defaultCity: PropTypes.shape({
    name: PropTypes.string,
    lat: PropTypes.number,
    lon: PropTypes.number
  }),
  setSelectedCity: PropTypes.func
};

const mapStateToProps = state => ({
  selectedCity: getSelectedCity(state),
  cityForWeather: getCityForWeather(state)
});

const mapDispatchToProps = dispatch => ({
  setSelectedCity: city => dispatch(setSelectedCity(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
