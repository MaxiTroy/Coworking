import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12} sx={{display:'flex',justifyContent:'center'}}>
              <Typography
              variant="h5"
              color="text.secondary"
              align="center">
                   Horarios
              </Typography>
             
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              color="primary"
              variant="outlined"
              style={{ width: 60, margin: 10 }}
            >
              9:00
            </Button>
            <Button
              variant="contained"
              color="success"
              style={{ width: 60, margin: 10 }}
            >
              10:00
            </Button>
            <Button
              variant="contained"
              color="error"
              style={{ width: 60, margin: 10 }}
            >
              11:00
            </Button>
            <Button
              variant="contained"
              color="error"
              style={{ width: 60, margin: 10 }}
            >
              12:00
            </Button>
            <Button
              variant="contained"
              color="error"
              style={{ width: 60, margin: 10 }}
            >
              13:00
            </Button>
            <Button
              color="primary"
              variant="outlined"
              style={{ width: 60, margin: 10 }}
            >
              14:00
            </Button>
            <Button
              variant="contained"
              color="success"
              style={{ width: 60, margin: 10 }}
            >
              15:00
            </Button>
            <Button
              variant="contained"
              color="success"
              style={{ width: 60, margin: 10 }}
            >
              16:00
            </Button>
            <Button
              variant="contained"
              color="success"
              style={{ width: 60, margin: 10 }}
            >
              17:00
            </Button>
            <Button
              variant="contained"
              color="success"
              style={{ width: 60, margin: 10 }}
            >
              18:00
            </Button>
            <Button
              color="primary"
              variant="outlined"
              style={{ width: 60, margin: 10 }}
            >
              19:00
            </Button>
            <Button
              color="primary"
              variant="outlined"
              style={{ width: 60, margin: 10 }}
            >
              20:00
            </Button>
            <Button
              color="primary"
              variant="outlined"
              style={{ width: 60, margin: 10 }}
            >
              21:00
            </Button>
            <Button
              color="primary"
              variant="outlined"
              style={{ width: 60, margin: 10 }}
            >
              22:00
            </Button>
            <Button
              color="primary"
              variant="outlined"
              style={{ width: 60, margin: 10 }}
            >
              23:00
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{ color: "white", background: "#424242", margin:3 }}
          >
            Reservar
          </Button>
        </Box>
      </Container>
    </Stack>
  );
}
