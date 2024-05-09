import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import sara from './assets/sara.webp';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#db9243' : '#308fe8',
  },
}));

export default function MUIBio() {
  return (
    <>
      <Box sx={{ display: 'flex', width: '75%', margin: 'auto' }}>
        <Box>
          <img src={sara} style={{ width: '600px', height: '700px' }} alt="" />
        </Box>
        <Box style={{ margin: '20px' }}>
          <Typography variant="h3" sx={{ lineHeight: '1.5' }}>
            Frontend Developer & UI/UX Designer
          </Typography>
          <Typography variant="" sx={{ lineHeight: '1.5', fontSize: '16px' }}>
            I specialize in creating engaging and user-friendly interfaces. With a keen eye for design and a passion for
            technology, I strive to craft seamless experiences that delight users.
          </Typography>

          <Typography variant="h6" sx={{ lineHeight: '.5', margin: '25px 0' }}>
            <h5>React</h5>
            <BorderLinearProgress variant="determinate" value={80} />
          </Typography>

          <Typography variant="h6" sx={{ lineHeight: '.5', margin: '25px 0' }}>
            <h5>Design</h5>
            <BorderLinearProgress variant="determinate" value={90} />
          </Typography>

          <Typography variant="h6" sx={{ lineHeight: '.5', margin: '25px 0' }}>
            <h5>Javascript</h5>
            <BorderLinearProgress variant="determinate" value={85} />
          </Typography>

          <Typography variant="h6" sx={{ lineHeight: '.5', margin: '25px 0' }}>
            <h5>HTML</h5>
            <BorderLinearProgress variant="determinate" value={95} />
          </Typography>

          <Typography variant="h6" sx={{ lineHeight: '.5', margin: '25px 0' }}>
            <h5>CSS</h5>
            <BorderLinearProgress variant="determinate" value={90} />
          </Typography>

          <Box>
            <Button variant="contained" sx={{
              backgroundColor: '#db9243',
              margin: '15px 15px 15px 0',
              borderRadius: '25px',
              '&:hover': {
                backgroundColor: '#6c757d', 
              }
            }}>View Portfolio</Button>

            <Button variant="contained" sx={{
              backgroundColor: '#6c757d',
              margin: '15px 15px 15px 0',
              padding: '5px 35px',
              borderRadius: '25px',
              '&:hover': {
                backgroundColor: '#db9243', 
              }
            }}>Contact Me</Button>

          </Box>

        </Box>
      </Box>
    </>
  )
}
