import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import travelPackages from "../../data/data.json";

type travelPackage = {
  title: string;
  image: string;
  description: string;
};

const Packages = () => {
  const [packages, setPackages] = useState<travelPackage[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    const message = `Hello Travel India! And  i am interested in your tour packages.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "7006036459";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };
  useEffect(() => {
    setPackages(travelPackages);
  }, []);

  return (
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

                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={handleSubmit}
                >
                  Book Now
                </Button>
              </CardContent>
            </CardMedia>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Packages;
