import React from 'react';
import './Navbar.scss';
import RamiAvatar from "../../assets/navbarAssets/rami-malek.webp";

import { Avatar, Box, Divider, IconButton, Stack, Toolbar, Typography, styled } from '@mui/material';
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import CastConnectedOutlinedIcon from "@mui/icons-material/CastConnectedOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Nav({ handleDrawerOpen, handleItemClick, activeItem, open, navigate }) {

  return (
    <AppBar position="fixed" open={open} sx={{ backgroundColor: '#01121F'}}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon className='nav-left-menu-icon'/>
        </IconButton>
        <Box onClick={() => navigate("/")} className="nav-brand-icon-container">
          <FontAwesomeIcon icon={faVideoSlash} fontSize={20} />
          <Typography variant="h6" noWrap component="div">Gold</Typography>
        </Box>
        <Box className="nav-container">
          <Stack direction="row" spacing={3} ml={5}>
            <Typography variant="body1" noWrap className={activeItem === "Movies" ? "nav-active-tab" : "nav-tab"} onClick={() => navigate("/Movies")}>Movies</Typography>
            <Typography variant="body1" noWrap className={activeItem === "Series" ? "nav-active-tab" : "nav-tab"} onClick={() => navigate("/Series")}>Series</Typography>
            <Typography variant="body1" noWrap className={activeItem === "TvShows" ? "nav-active-tab" : "nav-tab"} onClick={() => navigate("/TvShows")}>Tv Shows</Typography>
            <Typography variant="body1" noWrap className={activeItem === "Animes" ? "nav-active-tab" : "nav-tab"} onClick={() => navigate("/Animes")}>Anime</Typography>
          </Stack>
          <Box className="nav-right-container">
            <Stack direction="row" spacing={3} mr={2}>
              <CastConnectedOutlinedIcon className='nav-right-icons'/>
              <SearchOutlinedIcon className='nav-right-icons'/>
              <NotificationsNoneOutlinedIcon className='nav-right-icons'/>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: 'white', mx: 1}}/>
            <Box className="nav-right-avatar-container">
              <Avatar alt="Ramy Malek" src={RamiAvatar} />
              <Box className="nav-right-avatar-info">
                <Typography variant="body1" noWrap ml={2} lineHeight="1.1"><b>Ramy Malek</b></Typography>
                <Typography variant="caption" noWrap ml={2} lineHeight="1">Premium</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
