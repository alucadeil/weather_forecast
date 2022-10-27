import PropTypes from 'prop-types';

const City = props => {
  const {
    city: { name },
    onClick
  } = props;

  return (
    <button className={'hover:opacity-80 hover:underline'} onClick={e => onClick(e, name)}>
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
