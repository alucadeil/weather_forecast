import PropTypes from 'prop-types';
import TimestampData from './timestampData';

const Hourly = props => {
  const { data } = props;
  return (
    <div className={'flex flex-col lg:flex-row py-2 px-4 max-w-[943px] overflow-x-scroll'}>
      {data.map(hourData => {
        const { date, time } = hourData;
        return <TimestampData key={date + time} data={hourData} isHourly />;
      })}
    </div>
  );
};

Hourly.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      temp: PropTypes.number,
      feelsLike: PropTypes.number,
      windSpeed: PropTypes.number,
      windDirection: PropTypes.string,
      weather: PropTypes.array,
      humidity: PropTypes.number
    })
  ),
  extended: PropTypes.bool
};

export default Hourly;
