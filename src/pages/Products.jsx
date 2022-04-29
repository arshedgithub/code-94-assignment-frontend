import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  Button,
} from "@mui/material";
// svg icons
import EditIcon from "../assets/svg/edit-icon.svg";
import StarIcon from "../assets/svg/star.svg";
import StarredIcon from "../assets/svg/starred.svg";
import DeleteProduct from "../components/DeleteProduct";

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
                  <TableCell align="left">{sku}</TableCell>
                  <TableCell align="left">{image}</TableCell>
                  <TableCell align="left">{name}</TableCell>
                  <TableCell align="left">${quality}.00</TableCell>
                  <TableCell align="right">
                    {/* delete component */}
                    <DeleteProduct productId={_id} />

                    {/* navigate to edit product */}
                    <Link to="/edit-product">
                      <Button variant="text" sx={{ m: 0, p: 0 }}>
                        <img src={EditIcon} alt="delete" />
                      </Button>
                    </Link>

                    {/* make product favourite */}
                    <Button variant="text" onClick={() => setLiked(!liked)}>
                      <img src={liked ? StarredIcon : StarIcon} alt="delete" />
                    </Button>
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
