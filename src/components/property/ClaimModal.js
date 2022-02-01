/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Dialog,
  Button,
  Typography,
  CardMedia,
  CardActions,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
// import getInitials from '../../../utils/getInitials';

const ClaimModal = (props) => {
  // eslint-disable-next-line react/prop-types
  const {
    authorAvatar,
    authorName,
    onClose,
    activeProperty,
    properties,
    ...other
  } = props;
  const property =
    properties && properties.filter((p) => p.id === activeProperty)[0];
  const [page, setPage] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    onClose();
    setPage(false);
  };

  return (
    <Dialog onClose={handleClose} open={properties.isModalOpen} {...other}>
      <CardMedia image={property && property.image} sx={{ height: 200 }} />
      <Box
        sx={{
          minWidth: '600px',
          minHeight: '300px',
          p: 3,
        }}
      >
        <Typography
          align='center'
          color='textPrimary'
          gutterBottom
          variant='h4'
        >
          {property && property.address.formatted_street_address}
        </Typography>
        {page !== true ? (
          <Page1 setPage={setPage} />
        ) : (
          <Page2 onClose={onClose} />
        )}
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
