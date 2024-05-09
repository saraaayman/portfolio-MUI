import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';

export default function MUICard() {
  return (
    <Card sx={{ border: '.5px solid #ccc', minWidth: "35%", height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', margin: '10px', padding: '20px' }}>
      <CardContent>
        <CodeIcon sx={{ fontSize: '50px', color: "#db9243", marginBottom: '20px',display:"flex",justifyContent:"center" }} />
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>Frontend Development</Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '20px' }}>
          As a frontend developer, I specialize in building engaging user interfaces and interactive web applications using the latest technologies.
        </Typography>
      </CardContent>
    </Card>
  );
}
