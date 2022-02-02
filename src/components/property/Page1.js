/* eslint-disable react/prop-types */
import React from 'react';

import { Box, Button, CardActions, Typography } from '@material-ui/core';

const Page1 = ({ setPage }) => (
  <>
    <Typography align='center' color='textSecondary' variant='subtitle2'>
      Select Verify Ownership and Claim to proceed with our integrated 1 click
      KYC api
    </Typography>
    <Box sx={{ mt: 6, textAlign: 'center' }}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          mt: 6,
        }}
      >
        <Box sx={{ ml: 0 }}>
          <Typography color='textPrimary' variant='subtitle2' />
          {/* <Typography color='textSecondary' variant='body2'>
          Author note: Please remember to include your soft skills.
        </Typography> */}
        </Box>
      </Box>
    </Box>
    <CardActions>
      <Button
        variant='contained'
        fullWidth
        onClick={() => setPage((prev) => !prev)}
        align='center'
      >
        Claim Property and Generate NFT
      </Button>
    </CardActions>
  </>
);

export default Page1;
