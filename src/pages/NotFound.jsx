import { Alert, AlertTitle } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Alert severity="error">
      <AlertTitle>Page Not Found - 404 </AlertTitle>
      Go to{" "}
      <strong>
        <Link to="/products">Products</Link>
      </strong>
    </Alert>
  );
};

export default NotFound;
