// import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Dialog, Button, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
// import getInitials from '../../../utils/getInitials';

const ClaimModal = (props) => {
  const { authorAvatar, authorName, onClose, open, ...other } = props;
  // const [value, setValue] = useState('');
  const navigate = useNavigate();
  const handleClaim = () => {
    navigate('/dashboard');
  };

  return (
    <Dialog maxWidth='lg' onClose={onClose} open={open} {...other}>
      <Box sx={{ p: 3 }}>
        <Typography
          align='center'
          color='textPrimary'
          gutterBottom
          variant='h4'
        >
          1234 Main Street Miami FL
        </Typography>
        <Typography align='center' color='textSecondary' variant='subtitle2'>
          Select Verify Ownership and Claim to proceed with our integrated 1
          click KYC api
        </Typography>
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button onClick={handleClaim} align='center'>
            Generate NFT
          </Button>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              mt: 6,
            }}
          >
            <Box sx={{ ml: 0 }}>
              <Typography color='textPrimary' variant='subtitle2'>
                {authorName}
              </Typography>
              {/* <Typography color='textSecondary' variant='body2'>
                Author note: Please remember to include your soft skills.
              </Typography> */}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            mt: 3,
            p: 3,
          }}
        />
      </Box>
    </Dialog>
  );
};

ClaimModal.propTypes = {
  authorAvatar: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  onApply: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

export default ClaimModal;
