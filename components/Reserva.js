import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import Calendar from "./dashboardPage/Calendar";
import Time from "./dashboardPage/TimeList";

const Reserva = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={5} lg={5}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" color="text.secondary" align="center">
              Calendario
            </Typography>
            <Calendar />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={7} lg={7}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Time />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Reserva;
