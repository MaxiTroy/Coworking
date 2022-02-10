import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  fondoImg: {
    width: "100%",
    height: "auto",
  },
  outlineButton: {
    color: "orange",
    borderColor: "orange",
  },
  bodyCard: {
      display:'flex',
      flexDirection:'column',
    width: "50%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: "35%",
    marginLeft: "30%",
  },
});

const Banner = () => {
  const style = useStyles();
  return (
    <>
      <Box>
        <img
          src="https://www.realestatemarket.com.mx/images/2021/09-septiembre/1609/Grande_coworking.jpg"
          className={style.fondoImg}
        />
        <Box className={style.bodyCard}>
          <Typography 
          color="white" 
          variant="h5" 
          component="div" 
          gutterBottom
          sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus,
          </Typography>
          <Button 
          className={style.outlineButton} 
          variant="outlined"
          sx={{ mr: 2, display: { xs: "none", md: "flex" } }}

          >
            ¡Saber más!
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
