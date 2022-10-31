import PropTypes from 'prop-types';

const City = props => {
  const { city, isSelected = null, onClick } = props;

  const classNames = `p-1 ${isSelected ? 'bg-gray-200' : 'bg-gray-100'} rounded hover:bg-gray-200`;

  return (
    <button className={classNames} onClick={e => onClick(e, city)}>
      {city.name}
    </button>
  );
};

City.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    lat: PropTypes.number,
    lon: PropTypes.number
  }),
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};
export default City;
