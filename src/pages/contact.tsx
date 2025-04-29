import { Gallery } from "@/components/common/Gallery";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello Travel India! My name is ${name},and  i am interested in your tour packages.${phone}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "7006036459";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 400,
            mx: "auto",
          }}
        >
          <TextField
            label="Your Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Your Phone Number"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Send to WhatsApp
          </Button>
        </Box>
      </Container>
      <Gallery />
    </>
  );
}
