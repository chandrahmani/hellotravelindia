import { Box, Button, Container, Link, Typography } from "@mui/material";
import ImageSlider from "../core/modal/ImageSlider";
import { Gallery } from "./Gallery";
import ScrollButtonUp from "../core/scrollButton/ScrollButtonUp";

const HomePage = () => {
  return (
    <div>
      <ImageSlider />

      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignContent: "center",
          justifyContent: "center",
          gap: 2,
          py: 4,
        }}
      >
        <Box sx={{ flex: 1, textAlign: "center", pt: 10 }}>
          <Typography variant="h5" gutterBottom>
            Explore Kashmir with Us
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Explore more packages now and experience the breathtaking beauty of
            Kashmir.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
            component={Link}
            href="/packages"
          >
            Explore Now
          </Button>
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src="https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fcaptureatrip.s3.amazonaws.com%2Fuploads%2Ftrip%2Fimages%2Fbanner%2F6635d714-6932-498a-932a-0cc4d834fdc3.jpg&w=3840&q=75"
            alt="Beautiful Kashmir Tour"
            width={500}
            height={300}
            style={{ borderRadius: "10px" }}
          />
        </Box>
      </Container>

      <Gallery />
      <ScrollButtonUp />
    </div>
  );
};

export default HomePage;
