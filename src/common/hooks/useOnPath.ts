import { useHistory } from 'react-router-dom';

import { useEffect, useState } from 'react';

const useOnPath = (pathName = ''): boolean => {
  const history = useHistory();
  const [onPath, setOnPath] = useState(false);
  useEffect(() => {
    setOnPath(!history.location.pathname.includes(`/${pathName}`));
  }, [history.location, history.location.pathname, pathName]);
  return onPath;
};

export default useOnPath;
