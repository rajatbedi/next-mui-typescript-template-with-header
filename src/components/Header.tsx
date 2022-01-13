import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import { Tabs } from "@mui/material";
import { useRouter } from "next/router";
import MobileSwipeableDrawer from "./Drawer";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  const router = useRouter();

  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        router.push(props.href!!);
      }}
      {...props}
    />
  );
}

const pages = [
  { name: "Home", href: "/", icon: <HomeIcon/>  },
  { name: "About Us", href: "/about", icon: <InfoIcon/> },
  { name: "Contact Us", href: "/contact", icon: <ContactPageIcon/> },
];

const ResponsiveAppBar = () => { 

  const [value, setValue] = React.useState(0);
  const [drawerState, setDrawerState] = React.useState(false);

  const toggleDrawer = (value: boolean) => (event: any) => {
    setDrawerState(value);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo Desktop */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography>

          {/* Mobile/Tab  Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setDrawerState(!drawerState)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <MobileSwipeableDrawer
              drawerState={drawerState}
              toggleDrawer={toggleDrawer}
              pages={pages}
            />
          </Box>
          {/* Mobile/Tab Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              centered={true}
            >
              {pages.map((page) => (
                <LinkTab label={page.name} href={page.href} />
              ))}
            </Tabs>
          </Box>
          {/* Header Right Section */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              startIcon={<PersonIcon />}
            >
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
