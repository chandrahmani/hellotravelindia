import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { PackageType } from "@/utils/types";
import axios from "axios";

const Packages = () => {
  const [packages, setPackages] = useState<PackageType[]>([]);

  const fetchPackages = async () => {
    try {
      const { data } = await axios.get("/api/packages");
      console.log(data);
      setPackages(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPackages();
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
                <Typography variant="h6" sx={{ fontFamily: "serif" }}>
                  {pkg.description}
                </Typography>
                <Typography
                  variant="h5"
                  color="textSecondary"
                  sx={{ fontFamily: "serif" }}
                >
                  {pkg.price}
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
  );
};

export default Packages;
