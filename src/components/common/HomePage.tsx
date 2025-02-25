import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ImageSlider from "../core/modal/ImageSlider";
import travelPackages from "../../data/data.json";
import { useEffect, useState } from "react";
import { Gallery } from "./Gallery";

type travelPackage = {
  title: string;
  image: string;
  description: string;
};
const HomePage = () => {
  const [packages, setPackages] = useState<travelPackage[]>([]);

  useEffect(() => {
    setPackages(travelPackages);
  }, []);
  return (
    <div>
      <ImageSlider />

      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontFamily: "cursive" }}
      >
        Explore Our Exclusive Travel Packages
      </Typography>
      <Grid container spacing={5} sx={{ p: 3 }}>
        {packages.map((pkg, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ mb: 5 }}>
              <CardMedia>
                <CardContent>
                  <img src={pkg.image} width={"500"} height={"200"} />
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "sans-serif", fontWeight: "600" }}
                  >
                    {pkg.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    sx={{ fontFamily: "serif" }}
                  >
                    {pkg.description}
                  </Typography>

                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Book Now
                  </Button>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Gallery />
    </div>
  );
};

export default HomePage;
