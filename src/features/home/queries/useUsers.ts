import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../services';

export const useUsers = () => {
  return useQuery({
    queryKey: ['home'],
    queryFn: getUsers,
    enabled: true, // true: auto fetch on screen focus
  });
};
