import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const products = [
  {
    name: "12/02/2022",
    desc: "(9.00, 10.00, 11.00)",
    price: "$309.99",
  },
  {
    name: "15/02/2022",
    desc: "(9.00, 10.00, 11.00)",
    price: "$309.99",
  },
  {
    name: "15/02/2022",
    desc: "(9.00, 10.00, 11.00)",
    price: "$309.99",
  },
  {
    name: "15/02/2022",
    desc: "(9.00, 10.00, 11.00)",
    price: "$309.99",
  },
  
];

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Tipo de tarjeta", detail: "Visa" },
  { name: "Titular", detail: "Mr John Smith" },
  { name: "Número de tarjeta", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Fecha de vencimiento", detail: "04/2024" },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Lista de compra
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} >
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $1239.96
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Nombre y dirección
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalles de pago
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
