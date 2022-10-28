import PropTypes from 'prop-types';

const City = props => {
  const {
    city: { name },
    onClick
  } = props;

  return (
    <button className={'p-1 bg-gray-100 rounded hover:bg-gray-200'} onClick={e => onClick(e, name)}>
      {name}
    </button>
  );
};

City.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }),
  onClick: PropTypes.func
};
export default City;
