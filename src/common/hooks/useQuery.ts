import { useLocation } from 'react-router-dom';

const useQuery: (queryParam: string) => any = (queryParam: string) => {
  return new URLSearchParams(useLocation().search).get(queryParam);
};
export default useQuery;
