import Dashboard from "../components/dashboardPage/Dashboard";
import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Reserva from "../components/Reserva";

const Reservas = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Dashboard>
          <Reserva />
        </Dashboard>
      </LocalizationProvider>
    </>
  );
};

export default Reservas;
