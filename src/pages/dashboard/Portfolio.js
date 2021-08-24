import { Container } from '@material-ui/core';
import React from 'react';
import PhotoGallery from '../../components/dashboard/photos/PhotoGallery';

import { initial } from '../../components/dashboard/photos/data';

const Portfolio = () => (
  <Container maxWidth='xl' sx={{ mt: 3 }}>
    <PhotoGallery initial={initial} />
  </Container>
);

export default Portfolio;
