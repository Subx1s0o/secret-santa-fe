import { Room } from '@/types/room';
import { useMemo } from 'react';
import { useUser } from './useUser';

const useFilteredUserIndices = (santa: Room | undefined) => {
    const me = useUser()
    
  return useMemo(() => {
    return santa?.users
      .map((user, index) => {
        return user.statusses[0]?.status === false && user.id !== me?.id ? index : -1;
      })
      .filter(index => index !== -1) || [];
  }, [santa, me]);
};

export default useFilteredUserIndices;
