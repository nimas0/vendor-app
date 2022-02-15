/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Grid, IconButton } from '@material-ui/core';
import HomeView from '../widgets/grid-lists/HomeView';
// import { useTheme } from '@material-ui/core/styles';
import ReactMapGL, { Marker } from 'react-map-gl';

import mapboxgl from '!mapbox-gl';

import { LocationOn } from '@material-ui/icons';
import ClaimModal from '../property/ClaimModal';

const HomeHero = (
  { properties, handleClose, handleOpen },
  ...props
) => {
  const [viewport, setViewport] = useState({
    latitude: 25.749656677246094,
    longitude: -80.23821716308594,
    zoom: 11,
    width: '100%',
    height: '100vh',
    style: { zIndex: 0 },
  });

  return (
    // const theme = useTheme();

    // useEffect(() => {
    //   (async () => {
    //     const response = await fetch(
    //       `/static/home/hero_${theme.palette.mode}.png`
    //     );
    //     const blob = await response.blob();

    //     setImage(URL.createObjectURL(blob));
    //     setIsLoading(false);
    //   })();
    // }, [theme.palette.mode]);

    <Box
      sx={{
        backgroundColor: 'transparent',
        pt: 6,
      }}
      {...props}
    >
      <Grid spacing={5} container>
        <Grid item xs={12} md={6} lg={6} xl={12}>
          <ReactMapGL
            mapStyle="mapbox://styles/nimas0/ckysy19yp7egy15qogb8clmbo"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            {...viewport}
            onViewportChange={(vp) => {
              setViewport(vp);
            }}
          >
            {properties &&
              properties.properties.map((property) => (
                <Marker
                  key={property.address.formatted_street_address}
                  latitude={property.address.latitude}
                  longitude={property.address.longitude}
                  onClick={() => handleOpen(property.id)}
                >
                  <IconButton color="primary">
                    <LocationOn fontSize="large" />
                  </IconButton>
                </Marker>
              ))}
          </ReactMapGL>
        </Grid>
      </Grid>
      <div
        style={{
          zIndex: 1,
          position: 'absolute',
          overflow: 'hidden',
          overflowY: 'scroll', // adde
          right: 0,
          top: 120,
          width: '37%',
        }}
      >
        <HomeView
          style={{ zIndex: 1 }}
          activeProperty={properties.selectedPropertyId}
          properties={properties.properties}
          handleOpen={handleOpen}
        />
      </div>
      <ClaimModal
        onClose={handleClose}
        open={properties.isModalOpen}
        activeProperty={properties.selectedPropertyId}
        properties={properties.properties}
      />
    </Box>
  );
};
export default HomeHero;
