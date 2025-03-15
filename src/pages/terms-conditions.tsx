import { Container, Link, Paper, Typography } from "@mui/material";

const TermsConditions = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4, md: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Hello Travel India! These terms and conditions outline the
          rules and regulations for the use of our tour and travel services in
          Kashmir.
        </Typography>
        <Typography variant="h6" gutterBottom>
          1. Booking and Payments
        </Typography>
        <Typography variant="body1" paragraph>
          - All bookings must be confirmed with a valid payment. - Cancellations
          are subject to our refund policy.
        </Typography>
        <Typography variant="h6" gutterBottom>
          3. Cancellations & Refunds
        </Typography>
        <Typography variant="body1" paragraph>
          - Cancellations made 7 days before departure are eligible for a 50%
          refund. - No refunds for last-minute cancellations.
        </Typography>
        <Typography variant="h6" gutterBottom>
          4. Liability
        </Typography>
        <Typography variant="body1" paragraph>
          - Hello Travel India is not responsible for any losses due to
          unforeseen circumstances. - Travelers are advised to have travel
          insurance.your personal information from unauthorized access or
          disclosure.
        </Typography>
        <Typography variant="h6" gutterBottom>
          5. Changes to Terms
        </Typography>
        <Typography variant="body1" paragraph>
          - We reserve the right to modify these terms at any time.
        </Typography>
      </Paper>
    </Container>
  );
};
export default TermsConditions;
