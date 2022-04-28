import React from "react";
import { Typography, TextField, Toolbar } from "@mui/material";

const NewProduct = () => {
  return (
    <div>
      <Toolbar>
        <Typography>SKU</Typography>
        <TextField id="outlined-basic" variant="outlined" />
      </Toolbar>
    </div>
  );
};

export default NewProduct;
