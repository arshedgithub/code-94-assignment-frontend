import React from "react";
// material UI components
import {
  Button,
  createTheme,
  InputBase,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
// svg star icon
import Star from "../assets/svg/star.svg";
import { Link } from "react-router-dom";

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
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          size="large"
          sx={{ letterSpacing: 2, fontWeight: "bold" }}
        >
          PRODUCTS
        </Typography>
      </Toolbar>

      <Toolbar>
        <Paper
          component="form"
          sx={{
            p: "1px 4px",
            mr: 20,
            display: "flex",
            alignItems: "center",
            width: 300,
            boxShadow: "none",
            backgroundColor: "#F7F7F7",
            borderRadius: "20px",
            flexGrow: 1,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="search for products"
          />
          <Button
            variant="contained"
            size="small"
            color="primary"
            sx={{ m: 1, textDecoration: "none", borderRadius: "18px", px: 2 }}
          >
            <SearchIcon />
            search
          </Button>
        </Paper>

        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} /> */}
        <Link to="/new-product">
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={{ m: 1, textDecoration: "none" }}
          >
            New Product
          </Button>
        </Link>

        {/* star icon */}
        <Link to="/new-product">
          <Button variant="outlined" size="large" color="primary">
            <img src={Star} alt="star icon" />
          </Button>
        </Link>
      </Toolbar>
    </ThemeProvider>
  );
};

export default ProductAppBar;
