import React from "react";
// material UI component
import { Button, createTheme, Toolbar, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

// customizing the theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#001EB9", // given dark blue color
    },
  },
});

const ProductAppBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h5"
        component="div"
        sx={{ letterSpacing: 2, fontWeight: "bold" }}
      >
        PRODUCTS
      </Typography>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
        <Button variant="contained" size="large" color="primary" sx={{ m: 1 }}>
          New Product
        </Button>
        <Button variant="outlined" size="large" color="primary"></Button>
      </Toolbar>
    </ThemeProvider>
  );
};

export default ProductAppBar;
