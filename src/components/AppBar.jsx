import React, { useState } from "react";

// material UI components
import {
  Box,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// setting options
const settings = ["Profile", "Account", "Logout"];

export default function UserAppBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  //   expand the user menu
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  //   close the user menu
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
        <Typography variant="subtitle2" component="div" sx={{ p: 2 }}>
          ADMIN <ArrowDropDownIcon />
        </Typography>

        {/* profile */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            {/* profile image */}
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="John Doe" src="../assets/images/profile1.jpg" />
            </IconButton>
          </Tooltip>

          {/* settings */}
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Box>
  );
}
