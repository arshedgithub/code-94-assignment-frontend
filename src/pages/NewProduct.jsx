import React from "react";
// material UI components
import { Typography, TextField, Toolbar } from "@mui/material";
// reuseable components
import BreadCrumb from "../components/breadCrumb";

const NewProduct = () => {
  return (
    <div>
      <BreadCrumb pageName="Add new product" />
      <Toolbar>
        <Typography>SKU</Typography>
        <TextField id="outlined-basic" variant="outlined" />
      </Toolbar>
    </div>
  );
};

export default NewProduct;
