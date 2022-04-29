import React from "react";
// material UI components
import { Toolbar, Typography } from "@mui/material";
// svg icon
import ArrowIcon from "../assets/svg/arrow.svg";

const BreadCrumb = ({ pageName }) => {
  return (
    <Toolbar>
      <Typography
        variant="h5"
        component="div"
        size="large"
        sx={{ letterSpacing: 2, fontWeight: "bold" }}
      >
        PRODUCTS
      </Typography>
      <img src={ArrowIcon} alt="Arrow icon" />
      <Typography>{pageName}</Typography>
    </Toolbar>
  );
};

export default BreadCrumb;
