/* eslint-disable linebreak-style */
import { Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RUG from 'react-upload-gallery';
import 'react-upload-gallery/dist/style.css';
// import { galleryApi } from '../../../__fakeApi__/galleryApi';

const PhotoGallery = ({ initial }) => {
  if (initial) {
    return (
      <>
        <RUG initialState={initial} />
        <Typography
          sx={{ mt: 3 }}
          align='center'
          variant="h2"
          color='info'
          component="div"
          gutterBottom
        >Hold Drag and Sort Items
        </Typography>
      </>
    );
  }
  return <p>loading</p>;
};

export default PhotoGallery;

PhotoGallery.propTypes = {
  initial: PropTypes.any.isRequired
};
