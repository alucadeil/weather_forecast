import { getWeatherType } from './utils';
import Icon from '../icon';

const Data = ({ data, title, extended }) => (
  <div
    className={`flex flex-col items-center min-w-[45px] px-2 ${
      extended && 'first:pl-0 border-r-[1px]'
    } last:border-none`}>
    {title ? <div>{title ?? ''}</div> : null}
    <div>{data}</div>
  </div>
);

const HourlyData = props => {
  const {
    data: { windSpeed, windDirection, time, temp, weather }
  } = props;
  const weatherType = getWeatherType(weather);
  return (
    <div
      key={time}
      className={
        'flex flex-col items-center gap-2 px-4 border-r-[1px] last:border-none max-lg:border-r-0 max-lg:border-b-[1px]'
      }>
      <>
        <div>{time}</div>
        <Icon name={weatherType} className={' w-[30px] h-[30px] fill-slate-900 '} />
        <div className={'flex'}>
          <Data data={`${temp} °C`} />
        </div>
        <div>
          Wind: {windSpeed} m/sec, {windDirection}
        </div>
      </>
    </div>
  );
};

const DailyData = props => {
  const {
    data: {
      windSpeed,
      windDirection,
      date,
      weather,
      temp: { day, eve, morn, night, min, max }
    },
    extended
  } = props;
  const weatherType = getWeatherType(weather);
  return (
    <div
      key={date}
      className={
        'flex flex-col gap-2 px-4 border-r-[1px] last:border-none max-lg:border-r-0 max-lg:border-b-[1px] max-lg:first:border-t-[1px]`'
      }>
      <Icon name={weatherType} className={' w-[20px] h-[20px] fill-slate-900 '} />
      {extended ? (
        <>
          <Data data={`${min} - ${max} °C`} title={date} />
          <Data data={`${windSpeed} m/sec, ${windDirection}`} title={'Wind'} />
        </>
      ) : (
        <>
          <div>{date}</div>
          <div className={'flex min-w-[50px]'}>
            <Data data={night} title={'Night'} />
            <Data data={morn} title={'Morning'} />
            <Data data={day} title={'Day'} />
            <Data data={eve} title={'Evening'} />
          </div>
          <div>
            Wind: {windSpeed} m/sec, {windDirection}
          </div>
        </>
      )}
    </div>
  );
};

const TimestampData = props => {
  const { data, isHourly, extended } = props;
  return isHourly ? <HourlyData data={data} /> : <DailyData data={data} extended={extended} />;
};

export default TimestampData;
