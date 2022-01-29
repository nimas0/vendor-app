/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Grid, IconButton } from '@material-ui/core';
import HomeView from '../widgets/grid-lists/HomeView';
// import { useTheme } from '@material-ui/core/styles';
import ReactMapGL, { Marker } from 'react-map-gl';
import homeData from '../../__fakeApi__/home.json';
import { LocationOn } from '@material-ui/icons';
import ClaimModal from '../property/ClaimModal';

const HomeHero = (props) => {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: 25.749656677246094,
    longitude: -80.43821716308594,
    zoom: 11,
    width: 'auto',
    height: '800px',
  });

  const handleApplyModalOpen = () => {
    setIsApplicationOpen(true);
  };

  const handleApplyModalClose = () => {
    setIsApplicationOpen(false);
  };

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
        backgroundColor: 'background.paper',
        pt: 6,
      }}
      {...props}
    >
      <Grid spacing={3} container>
        <Grid item xs={8}>
          <ReactMapGL
            mapStyle='mapbox://styles/nimas0/ckysy19yp7egy15qogb8clmbo'
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            {...viewport}
            onViewportChange={(vp) => {
              setViewport(vp);
            }}
          >
            {homeData.homes.map((home) => (
              <Marker
                key={home.address}
                latitude={home.latitude}
                longitude={home.longitude}
                onClick={handleApplyModalOpen}
              >
                <IconButton color='primary'>
                  <LocationOn fontSize='large' />
                </IconButton>
              </Marker>
            ))}
          </ReactMapGL>
        </Grid>
        <Grid sx={{ backgroundColor: '#142c38' }} item xs={4}>
          <HomeView />
        </Grid>
      </Grid>
      <ClaimModal onClose={handleApplyModalClose} open={isApplicationOpen} />
    </Box>
  );
};
export default HomeHero;
