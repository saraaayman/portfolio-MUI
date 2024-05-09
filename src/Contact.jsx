import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PinDropIcon from '@mui/icons-material/PinDrop';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function MUIContact() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "100px" }}>
      <Box sx={{ width: "60%", display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "45%" }}>
          <Typography variant="h4" gutterBottom style={{color:"#db9243"}}>
            Contact Form
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />
            <Button variant="contained" fullWidth style={{background:"#db9243"}}>
              Send Message
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: "45%" }}>
          <Typography variant="h4" gutterBottom style={{color:"#db9243"}}>
            Contact Info
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography variant="body1">
              <LocalPhoneIcon style={{color:"#db9243"}}/> 0123456789
            </Typography>
            <Typography variant="body1">
              <PinDropIcon style={{color:"#db9243"}}/> 43 Raymouth Rd. Baltemoer, London 3910
            </Typography>
            <Typography variant="body1">
              <EmailIcon style={{color:"#db9243"}} /> saraayman855@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
