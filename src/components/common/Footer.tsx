import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#333", color: "white", py: 4, mt: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Hello Travel India</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Explore the beauty of Kashmir with our exclusive tour packages.
              Experience nature, luxury, and adventure.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Quick Links</Typography>
            <Link
              href="/terms-conditions"
              color="inherit"
              display="block"
              sx={{ mt: 1 }}
              underline="none"
            >
              terms & conditions
            </Link>
            <Link
              href="/privacy-policy"
              color="inherit"
              display="block"
              sx={{ mt: 1 }}
              underline="none"
            >
              privacy policy
            </Link>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Phone: +91 7006036459 / +91 9906755156
            </Typography>
            <Typography variant="body2">
              Email: hellotravelsindia@gmail.com
            </Typography>
            <Typography variant="body2">
              Location: Head Office: Nowgam near railway station Srinagar Jammu
              & Kashmir 190015
            </Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Follow Us</Typography>
            <Box sx={{ mt: 1 }}>
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
              <IconButton color="inherit">
                <Instagram />
              </IconButton>
              <IconButton color="inherit">
                <Twitter />
              </IconButton>
              <IconButton color="inherit">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box
          sx={{
            textAlign: "center",
            mt: 3,
            pt: 2,
            borderTop: "1px solid #555",
          }}
        >
          <Typography variant="body2" style={{ color: "grey" }}>
            <Link
              href="https://www.webtechpie.com/"
              style={{ color: "#bdbbbb" }}
              underline="none"
            >
              Webtechpie
            </Link>
            &copy; 2025 Hello Travel India. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
