import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import mainStore from "../Zustand";

const MainListItem = ({}) => {
  // Store
  const store = mainStore();
  console.log(store, "esta es la store");

  //Guardar la page en la store async
  const [page, setPage] = React.useState("Reservas");
  console.log("esta pagina es: " + page);
  return (
    <>
      <ListItemButton
        onClick={() => {
          store.changeScreen("Reservas");
        }}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Reservas" />
      </ListItemButton>

      <ListItemButton
        onClick={() => {
          store.changeScreen("Pedidos");
        }}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Pedidos" />
      </ListItemButton>

      <ListItemButton
        onClick={() => {
          store.changeScreen("Registro");
        }}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Registro" />
      </ListItemButton>

      <ListItemButton
        onClick={() => {
          store.changeScreen("Reportes");
        }}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reportes" />
      </ListItemButton>

      <ListItemButton
        onClick={() => {
          store.changeScreen("Integrations");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
    </>
  );
};

export default MainListItem;
