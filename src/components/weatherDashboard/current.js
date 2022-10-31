import PropTypes from 'prop-types';
import Icon from '../icon';
import { getWeatherType } from './utils';

const Current = props => {
  const {
    name,
    data: { temp, feelsLike, humidity, windSpeed, date, windDirection, weather }
  } = props;
  const weatherType = getWeatherType(weather);
  return (
    <div
      className={'flex flex-col py-2 px-4 border-r-[1px] max-lg:border-r-0 max-lg:border-b-[1px]'}>
      <div>{name}</div>
      <div>{date}</div>
      <Icon name={weatherType} className={' w-[20px] h-[20px] fill-slate-900 '} />
      <div>Temperature: {temp} °C</div>
      <div>Feels like: {feelsLike}</div>
      <div>Humidity: {humidity} %</div>
      <div>
        Wind: {windSpeed} m/sec, {windDirection}
      </div>
    </div>
  );
};

Current.propTypes = {
  name: PropTypes.string,
  data: PropTypes.shape({
    temp: PropTypes.number,
    date: PropTypes.string,
    feelsLike: PropTypes.number,
    windSpeed: PropTypes.number,
    windDirection: PropTypes.string,
    weather: PropTypes.array,
    humidity: PropTypes.number
  })
};

export default Current;
