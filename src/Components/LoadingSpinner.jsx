import { SyncLoader } from 'react-spinners';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ color = "#dc2626", size = 20, text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <SyncLoader color={color} size={size} className="mb-4" />
      <p className="text-gray-600 text-lg">{text}</p>
    </div>
  );
};

LoadingSpinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  text: PropTypes.string,
};

export default LoadingSpinner;
