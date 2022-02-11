import Dashboard from "../components/dashboardPage/Dashboard";
import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const Home2 = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Dashboard />
      </LocalizationProvider>
    </>
  );
};

export default Home2;
