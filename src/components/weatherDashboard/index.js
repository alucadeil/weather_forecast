import PropTypes from 'prop-types';
import { useWeatherData } from '../../hooks/useWeatherData';
import Current from './current';
import Daily from './daily';
import Hourly from './hourly';

const Weather = props => {
  const { city, forecastDaysCount = 3, extended = false } = props;
  const { data, isDataLoading, isError, error } = useWeatherData(city);

  if (data?.isError || isError)
    return (
      <div className={'flex flex-col gap-4 items-center'}>
        <div>{data?.message || error?.data.message}</div>
      </div>
    );

  return (
    <div
      className={
        'flex items-center min-w-[min(1000px,_80vw)] min-h-[138px] justify-center border-[1px] shadow-md rounded text-sm'
      }>
      {isDataLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={`flex ${extended && 'flex-col'}`}>
          <div
            className={`flex items-center ${
              extended && 'border-b-[1px]'
            } max-lg:flex-col max-lg: border-b-0`}>
            <Current name={city.name} data={data.current} extended={extended} />
            {extended && <Hourly data={data.hourly} />}
          </div>
          <Daily data={data.daily} daysCount={forecastDaysCount} extended={extended} />
        </div>
      )}
    </div>
  );
};

Weather.propTypes = {
  city: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      name: PropTypes.string,
      lat: PropTypes.number,
      lon: PropTypes.number
    })
  ]),
  forecastDaysCount: PropTypes.number,
  extended: PropTypes.bool
};

export default Weather;
