import * as React from "react";
import './SideNav.css';
import { styled, useTheme } from "@mui/material/styles";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import MovieFilterOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import Home from "../../pages/home/Home";
import Nav from "../navbar/Navbar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideNav({ movies }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("Home");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const iconMapping = {
    Home: HomeIcon,
    Categories: CategoryIcon,
    Watchlist: VideoLibraryIcon,
    ComingSoon: CalendarMonthIcon,
    NewReleases: MovieFilterIcon,
    Settings: SettingsIcon,
  };

  const iconOutlinedMapping = {
    Home: HomeOutlinedIcon,
    Categories: CategoryOutlinedIcon,
    Watchlist: VideoLibraryOutlinedIcon,
    ComingSoon: CalendarMonthOutlinedIcon,
    NewReleases: MovieFilterOutlinedIcon,
    Settings: SettingsOutlinedIcon,
  };

  const routeName = {
    Home: "Home",
    Categories: "Categories",
    Watchlist: "Watchlist",
    ComingSoon: "Coming Soon",
    NewReleases: "New Releases",
    Settings: "Settings",
  };

  React.useEffect(() => {
    const pathname = location.pathname;
    const activeItem = pathname.substring(1) || "Home";
    setActiveItem(activeItem);
  }, [location.pathname]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Nav handleDrawerOpen={handleDrawerOpen} handleItemClick={handleItemClick} activeItem={activeItem} open={open} navigate={navigate}/>
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "#01121F",
            height: "100%",
            '& .MuiList-root': {
              display: 'flex',
              flexDirection: 'column',
            }
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon sx={{ color: "white" }} />
            ) : (
              <ChevronLeftIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{height: '100vh', justifyContent: 'center'}}>
          {["Home", "Categories", "Watchlist", "ComingSoon", "NewReleases", "Settings"].map((item) => {
            const IconComponent = iconMapping[item];
            const IconOutlinedComponent = iconOutlinedMapping[item];

            return(
            <ListItem key={item} disablePadding sx={{ display: "block", backgroundColor: activeItem === item ? "#011B31" : "transparent" }} component={Link} to={`/${item}`} onClick={() => handleItemClick({item})}>
              <ListItemButton sx={{ minHeight: 48, justifyContent: open ? "initial" : "center", px: 2.5 }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center", color: activeItem === item ? "#41EAD4" : "#5C5C62" }}>
                  {activeItem === item ? <IconComponent /> : <IconOutlinedComponent />}
                </ListItemIcon>
                <ListItemText primary={routeName[item]} sx={{ opacity: open ? 1 : 0, color: activeItem === item ? "white" : "#5C5C62" }} />
              </ListItemButton>
            </ListItem>
            )
          })}
        </List>
        <List>
          <Divider sx={{ backgroundColor: '#5C5C62'}}/>
          <ListItem disablePadding sx={{ display: "block" }} >
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? "initial" : "center", px: 2.5 }}>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center", color: "#5C5C62" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0, color: "#5C5C62" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 /*pt: 3*/ }}>
        <DrawerHeader />
        {/* <Home movies={movies} /> */}
      </Box>
    </Box>
  );
}
