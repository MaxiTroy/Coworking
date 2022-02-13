import Dashboard from "../components/dashboardPage/Dashboard";
import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Reserva from "../components/reservPage/Reserva";
import Registro from "../components/registerPage/Registro";
import Checkout from "../components/cartPage/Checkout";
import Login from "../components/loginPage/Login";
import mainStore from "../components/Zustand";

const Coworking = () => {
  const store = mainStore();
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Dashboard>
          <Reserva />
          <Registro />
          <Login />
          <Checkout />
        </Dashboard>
      </LocalizationProvider>
    </>
  );
};

export default Coworking;
