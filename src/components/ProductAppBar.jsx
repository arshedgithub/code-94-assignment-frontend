import React from "react";
// material UI component
import { Button, Toolbar, Typography } from "@mui/material";

const ProductAppBar = () => {
  return (
    <div>
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
    </div>
  );
};

export default ProductAppBar;
