"use client";

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

const navLinks = [
  { text: "Home", href: "/" },
  { text: "Products", href: "/products" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hello Travel India
        </Typography>

        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            {navLinks.map((link) => (
              <Link key={link.text} href={link.href} passHref>
                <Typography
                  variant="button"
                  sx={{
                    color: "#fff",
                    textDecoration: "none",
                    "&:hover": { color: "#ffeb3b" },
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
