import create from "zustand";

const useStore = create((set) => ({
  screen: "Reserva",
  changeScreen: (pantalla) => set({ screen: pantalla }),
}));

export default useStore;
