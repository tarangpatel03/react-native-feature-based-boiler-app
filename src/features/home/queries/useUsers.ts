import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../services';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    enabled: false, // important (manual trigger)
  });
};
