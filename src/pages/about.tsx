import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
        About Us
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Explore the beauty of Kashmir with our customized tour packages. We
        offer the best travel experiences, accommodations, and services to make
        your journey unforgettable.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="300"
              image="https://storage.googleapis.com/stateless-www-justwravel-com/2024/10/493a8100-best-places-to-visit-in-kashmir-1-810x456.jpg"
              alt="Kashmir Tour"
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            elevation={3}
            sx={{ padding: 3, borderRadius: 2, height: "100%" }}
          >
            <CardContent>
              <Typography variant="h5" color="textSecondary" paragraph>
                Way Choose Us ?
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                We specialize in providing:
              </Typography>
              <ul>
                <li>🏔️ Scenic Kashmir Tour Packages**</li>
                <li>🏨 Luxury & Budget-Friendly Stays**</li>
                <li>🚗 Safe & Comfortable Transportation**</li>
                <li>🌍 Personalized Travel Experiences**</li>
                <li>❤️ 24/7 Customer Support**</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mt: 5 }}>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom color="textSecondary">
                Our Mission
              </Typography>
              <Typography variant="body1" gutterBottom color="textSecondary">
                Our mission is to provide travelers with unique and enriching
                experiences in the paradise of Kashmir. From houseboat stays to
                thrilling adventures, we cater to all travel needs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="300"
              image="https://media-cdn.tripadvisor.com/media/photo-s/1d/7e/e7/e1/welcomheritage-gurkha.jpg"
              alt="Houseboat Stay"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
