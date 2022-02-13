import Dashboard from "../components/dashboardPage/Dashboard";
import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Reserva from "../components/reservPage/Reserva";
import Registro from "../components/registerPage/Registro";
import Checkout from "../components/cartPage/Checkout";
import Login from "../components/loginPage/Login";
import mainStore from "../components/Zustand";

//Se podria hacer un compoente para que quede mas prolijo
const Pantalla = (screen) => {
  switch (screen.screen) {
    case "Reservas":
      return <Reserva />;
    case "Registro":
      return <Registro />;
    case "Pedidos":
      return <Checkout />;
    case "Reportes":
      return <Login />;
    default:
      return <Reserva />;
  }
};

const Coworking = () => {
  const store = mainStore();

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Dashboard>
          <Pantalla screen={store.screen} />
        </Dashboard>
      </LocalizationProvider>
    </>
  );
};

export default Coworking;
