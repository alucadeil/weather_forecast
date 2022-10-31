import PropTypes from 'prop-types';
import TimestampData from './timestampData';

const Daily = props => {
  const { data, daysCount, extended } = props;
  const dailyData = data.slice(0, daysCount);
  return (
    <div className={'flex flex-col lg:flex-row py-2 px-4'}>
      {dailyData.map(dayData => {
        const { date } = dayData;
        return <TimestampData key={date} data={dayData} extended={extended} />;
      })}
    </div>
  );
};

Daily.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      temp: PropTypes.object,
      feelsLike: PropTypes.object,
      windSpeed: PropTypes.number,
      windDirection: PropTypes.string,
      weather: PropTypes.array,
      humidity: PropTypes.number
    })
  ),
  daysCount: PropTypes.number,
  extended: PropTypes.bool
};

export default Daily;
