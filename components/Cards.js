import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Container } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

const Cards = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 , paddingTop:'3%', justifyContent:'center'}}>
          <Container >

        <Grid container spacing={2} className={{ display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
          <Grid item xs={6} md={4}>
            <Card sx={{ maxWidth: 500,}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://st3.depositphotos.com/1606977/16957/i/600/depositphotos_169576438-stock-photo-top-view-of-people-studying.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
Cafe con leche                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6} md={4}>
            <Card sx={{ maxWidth: 500,}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://st3.depositphotos.com/2015659/16505/i/1600/depositphotos_165056028-stock-photo-multi-ethnic-group-of-young.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   Juntada en el laburo
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>


          <Grid item xs={6} md={4}>
            <Card sx={{ maxWidth: 500,}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://estaticos-cdn.elperiodico.com/clip/7029c557-f4b1-4e63-a1a1-385ff1c7e18c_alta-libre-aspect-ratio_default_0.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Jugando al counter
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6} md={6}>
            <Card sx={{ maxWidth: 500,}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://www.estilodv.com/public/images/guia/fotos/7661-coworking-sla.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Sillas GAMER!
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6} md={6}>
            <Card sx={{ maxWidth: 500,}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://www.estilodv.com/public/images/guia/3587-coworking-sla.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   Fingamos que me río
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

        </Grid>

        
        </Container>
      </Box>
    </>
  );
};
export default Cards;
