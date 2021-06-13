import { useLocation } from 'react-router-dom';

const useQuery: () => any = () => {
  return new URLSearchParams(useLocation().search);
};
export default useQuery;
