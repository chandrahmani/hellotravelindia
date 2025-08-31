import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "Packages", href: "/packages" },
  { text: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#c0cad4" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          href={"/"}
          sx={{
            flexGrow: 1,
            color: "#6462fc",
            fontFamily: "serif",
            fontWeight: "600",
          }}
        >
         <Image src="/imageLogo.png" width={150} height={0} alt="logo"/>
        </Typography>

        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            {navLinks.map((link) => (
              <Link key={link.text} href={link.href} passHref>
                <Typography
                  variant="h6"
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "900",
                    fontFamily: "serif",
                    "&:hover": { color: "#1916d1" },
                  }}
                >
                  {link.text}
                </Typography>
              </Link>
            ))}
          </Box>
        )}

        {isMobile && (
          <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {navLinks.map((link) => (
            <ListItem key={link.text} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary={link.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
