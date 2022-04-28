import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductAppBAr from "../components/ProductAppBar";
// material UI components
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import DeleteIcon from "../assets/svg/delete-icon.svg";
import EditIcon from "../assets/svg/edit-icon.svg";
import StarIcon from "../assets/svg/star.svg";
import StarredIcon from "../assets/svg/starred.svg";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [liked, setLiked] = useState(false);

  // get the data from the database when initial loading
  useEffect(() => {
    axios.get("http://localhost:4000/api/products").then((res) => {
      setProductList(res.data);
    });
  }, []);

  return (
    <div>
      <ProductAppBAr />
      <TableContainer
        sx={{
          px: 3,
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">SKU</TableCell>
              <TableCell align="left">IMAGE</TableCell>
              <TableCell align="left">PRODUCT NAME</TableCell>
              <TableCell align="left">PRICE</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((product) => {
              const { _id, sku, name, quality, image } = product;
              return (
                <TableRow
                  key={_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                    {name}
                  </TableCell> */}
                  <TableCell align="left">{sku}</TableCell>
                  <TableCell align="left">{image}</TableCell>
                  <TableCell align="left">{name}</TableCell>
                  <TableCell align="left">${quality}.00</TableCell>
                  <TableCell align="right">
                    <img src={DeleteIcon} alt="delete" />
                    <img src={EditIcon} alt="delete" />
                    <button
                      onClick={() => setLiked(!liked)}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    >
                      <img src={liked ? StarredIcon : StarIcon} alt="delete" />
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;
