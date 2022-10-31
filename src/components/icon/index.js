import PropTypes from 'prop-types';
import { icons } from '../../constants/icons';

const Icon = props => {
  const { name, className } = props;
  const icon = icons[name]?.figure;

  if (!icon) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      className={className}
      dangerouslySetInnerHTML={{ __html: icon }}></svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string
};

export default Icon;
