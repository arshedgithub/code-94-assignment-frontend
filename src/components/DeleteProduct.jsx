import React, { useState } from "react";
import axios from "axios";
// material UI components
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
// svg icon
import DeleteIcon from "../assets/svg/delete-icon.svg";
import AlertIcon from "../assets/svg/alert.svg";

export default function DeleteProduct({ id }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   deleting the product which is passed via props
  const handleDelete = async (id) => {
    console.log(id);
    handleClose();
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/products/${id}`
      );
      console.log(res.status);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Button variant="text" onClick={handleClickOpen}>
        <img src={DeleteIcon} alt="delete" />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ textAlign: "center" }}
      >
        <img src={AlertIcon} alt="Alert icon" width="100px" />
        <DialogTitle id="alert-dialog-title">{"ARE YOU SURE ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You will not be able to undo this action if you proceed!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}