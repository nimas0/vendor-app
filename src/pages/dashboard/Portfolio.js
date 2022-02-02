import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import PhotoGallery from '../../components/dashboard/photos/PhotoGallery';

import { initial } from '../../components/dashboard/photos/data';

const Portfolio = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    setTimeout(() => setImages(initial), 1000);
  }, []);

  return (
    <Container maxWidth='xl' sx={{ mt: 3 }}>
      <PhotoGallery initial={images} />
    </Container>
  );
};

export default Portfolio;
