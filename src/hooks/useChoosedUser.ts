import { RoomUser } from "@/types/room";

export const useChoosedUser = (
    users: RoomUser[] | undefined,
    indicesWithFalseStatus: number[] | undefined,
    index: number
  ) => {
    if (!users || !indicesWithFalseStatus) return null;
  
    if (indicesWithFalseStatus.includes(index)) {
      return users[index];
    }
  
    return null;
  };