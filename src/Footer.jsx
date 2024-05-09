import { Box, Typography, Link, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function MUIFooter() {
  return (
    <Box textAlign="center" sx={{ color: 'white', fontSize: '20px', width: '100%', height: '50vh', bgcolor: '#db9243', display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:"20px" }}>
      <Grid container spacing={3} marginX="auto" justifyContent="center">
        <Grid item xs={12} sm={4} >
          <div>
            <Typography variant="h5">About Us</Typography>
            <Typography variant="body1">Discover more about our mission and vision.</Typography>
            <Typography variant="body1">Learn about our team and our story.</Typography>
            <Typography variant="body1">Find out how to contact us.</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div>
            <Typography variant="h5">Services</Typography>
            <Typography variant="body1">Explore the services we offer.</Typography>
            <Typography variant="body1">Learn how we can assist you.</Typography>
            <Typography variant="body1">Discover our commitment to excellence.</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div>
            <Typography variant="h5">Connect with Us</Typography>
            <Typography variant="body1">
              <Link href="https://www.facebook.com">
                <FacebookIcon sx={{ fontSize: 40, color: 'white', bgcolor: '#db9243', borderRadius: '50%', padding: '5px', margin: '5px', '&:hover': { bgcolor: '#ccc' } }} />
              </Link>
              <Link href="https://www.linkedin.com">
                <LinkedInIcon sx={{ fontSize: 40, color: 'white', bgcolor: '#db9243', borderRadius: '50%', padding: '5px', margin: '5px', '&:hover': { bgcolor: '#ccc' } }} />
              </Link>
              <Link href="https://wa.me/">
                <WhatsAppIcon sx={{ fontSize: 40, color: 'white', bgcolor: '#db9243', borderRadius: '50%', padding: '5px', margin: '5px', '&:hover': { bgcolor: '#ccc' } }} />
              </Link>
              <Link href="https://www.instagram.com">
                <InstagramIcon sx={{ fontSize: 40, color: 'white', bgcolor: '#db9243', borderRadius: '50%', padding: '5px', margin: '5px', '&:hover': { bgcolor: '#ccc' } }} />
              </Link>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
