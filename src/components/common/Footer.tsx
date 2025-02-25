import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, Container, IconButton, Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ py: 3, textAlign: "center", background: "#333", color: "white" }}
    >
      <Container>
        <Typography variant="body1">
          <Link href="https://webtechpie.com/">Webtechpie</Link>
          &copy; 2025 Hello Travel India All rights reserved
        </Typography>
        <Box sx={{ mt: 1 }}>
          <IconButton color="inherit" href="#">
            <Facebook />
          </IconButton>
          <IconButton color="inherit" href="#">
            <Instagram />
          </IconButton>
          <IconButton color="inherit" href="#">
            <LinkedIn />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};
