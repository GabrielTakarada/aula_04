import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import log from "../../Assets/log.png";
import StoreIcon from "@mui/icons-material/Store";
import ContactsIcon from "@mui/icons-material/Contacts";

const BlackBackgroundAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#00aec9", // Define o background como preto
  borderBottom: "solid 1px #333",
  boxShadow: "1px 1px 4px 2px #333",
}));

export default function Navbar() {
  return (
    <Box>
      <BlackBackgroundAppBar position="static">
        <Toolbar>
          <img src={log} alt="logo" style={{ maxWidth: "195px" }}></img>
          <Box sx={{ flexGrow: 0.97 }} />
          <IconButton>
            <Link to="/main">
              <HomeIcon style={{ color: "white" }}></HomeIcon>
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/signin">
              <ContactsIcon style={{ color: "white" }}></ContactsIcon>
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/loja">
              <StoreIcon style={{ color: "white" }}></StoreIcon>
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/signin">
              <ExitToAppIcon style={{ color: "white" }}></ExitToAppIcon>
            </Link>
          </IconButton>
        </Toolbar>
      </BlackBackgroundAppBar>
    </Box>
  );
}
