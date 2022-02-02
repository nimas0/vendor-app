/* eslint-disable react/prop-types */
import React from 'react';
import { Box } from '@material-ui/core';
import LoadingClaim from './LoadingClaim';

const Page2 = ({ onClose }) => (
  <>
    <Box sx={{ mt: 6, textAlign: 'center' }}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          my: 6,
        }}
      >
        <LoadingClaim onClose={onClose} />
      </Box>
    </Box>
  </>
);

export default Page2;
