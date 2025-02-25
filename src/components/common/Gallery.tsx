import { useState } from "react";
import { Box, Dialog, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const galleryImages = [
  {
    src: "https://t4.ftcdn.net/jpg/04/66/74/07/360_F_466740766_ROSqOYMWZo81wDiiABv8CoEwPDxoyUDs.jpg",
    title: "Dal Lake, Kashmi",
  },
  {
    src: "https://www.financialexpress.com/wp-content/uploads/2018/01/gulmarg-1.jpg",
    title: "Gulmarg Snowfall",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFINnaZxqhydp_j_39UO6lKsEK9c8V5CBVOQ&s",
    title: "Pahalgam Valley",
  },
  {
    src: "https://static.toiimg.com/photo/msid-66121640,width-96,height-65.cms",
    title: "Sonmarg",
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h4"
        textAlign="center"
        mb={3}
        sx={{ fontFamily: "cursive" }}
      >
        Explore Kashmir - Tour & Travel Gallery
      </Typography>

      <Grid container spacing={2}>
        {galleryImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              component="img"
              src={image.src}
              alt={image.title}
              sx={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
                transitio: "0.3s",
                cursor: "pointer",
                "&:hover": { transform: "Scale(1.05)" },
              }}
              onClick={() => setSelectedImage(image.src)}
            ></Box>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        maxWidth="md"
      >
        <Box sx={{ position: "relative", p: 2, bgcolor: "black" }}>
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{ position: "absolute", top: 10, right: 10, color: "white" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          component="img"
          src={selectedImage!}
          alt="Selected"
          sx={{ width: "100%", maxHeight: "90vh", borderRadius: "10px" }}
        ></Box>
      </Dialog>
    </Box>
  );
};
