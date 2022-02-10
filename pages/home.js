import React from "react";
import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  fondoImg: {
    width: "100%",
    height: "auto",
    sizeMode: "cover",
  },
  outlineButton: {
    color: "orange",
    borderColor: "orange",
  },
  bodyCard:{
    width:'50%',
    height:'auto',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    position:'absolute',
    bottom:'35%',
    marginLeft:'30%'

  }
});
const Home = () => {
  const style = useStyles();
  return (
    <>
      <Box>
        <img
          src="https://www.realestatemarket.com.mx/images/2021/09-septiembre/1609/Grande_coworking.jpg"
          className={style.fondoImg}
        />
        <Box className={style.bodyCard}>
          
            <Typography color='white' variant="h5" component="div" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, 
            </Typography>
             <Button className={style.outlineButton} variant="outlined">
            Seguir leyendo
          </Button>
         
         
        </Box>
      </Box>

      <Navbar />
    </>
  );
};
//https://www.realestatemarket.com.mx/images/2021/09-septiembre/1609/Grande_coworking.jpg
export default Home;
