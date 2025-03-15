import { Container, Link, Paper, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          PrivacyPolicy
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Hello Travel India. Your privacy is important to us. This
          privacy policy outlines how we collect, use, and protect your
          information.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We collect personal information such as your name, contact details,
          and payment information when you book a tour with us.
        </Typography>
        <Typography variant="h6" gutterBottom>
          How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          Your information is used to process bookings, provide customer
          support, and improve our services. We do not sell your data to third
          parties.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Data Security
        </Typography>
        <Typography variant="body1" paragraph>
          We implement security measures to protect your personal information
          from unauthorized access or disclosure.
        </Typography>
        <Typography variant="h6" gutterBottom component={Link} href="/contact">
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions regarding our privacy policy, feel free to
          contact us at support@hellotravelindia.com .
        </Typography>
      </Paper>
    </Container>
  );
};
export default PrivacyPolicy;
