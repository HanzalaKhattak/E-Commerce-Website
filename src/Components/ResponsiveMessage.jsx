import {useWindowWidth} from './useWindowWidth';

const ResponsiveMessage = () => {
  const width = useWindowWidth();

  return width < 768 ? <p>Width is less than 786</p>
  <p>
    Width is ok
  </p>
};

export ResponsiveMessage;