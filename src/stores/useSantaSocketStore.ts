
import { Socket } from "socket.io-client";
import { create } from "zustand";

type SantaState = {
  socket: Socket | null
  setSocket: (santa: Socket | null) => void;
};

export const useSantaSocketStore = create<SantaState>((set) => ({
  socket: null,
  setSocket: (socket) => set({ socket }),
}));
