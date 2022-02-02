/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import {
  // HomeClients,
  HomeHero,
  // HomeOverview,
  // HomeRoles,
  // HomeFeatures,
  // HomeTestimonials,
} from '../components/home';
import Tour from 'reactour';
import gtm from '../lib/gtm';
import {
  closeModal,
  closeTour,
  getProperties,
  openModal,
  resetSelect,
  selectProperty,
} from '../slices/properties';
import { Button } from '@material-ui/core';

const Home = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties);

  const handleOpen = (id) => {
    console.log(id);
    dispatch(selectProperty(id));
    dispatch(openModal());
  };

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(resetSelect());
  };

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  useEffect(() => {
    dispatch(getProperties());
  }, []);

  return (
    <>
      <Helmet>
        <title>Finding Spaces</title>
      </Helmet>
      <Tour
        disableInteraction
        steps={properties.steps}
        isOpen={properties.tour}
        onRequestClose={() => dispatch(closeTour())}
        lastStepNextButton={
          <Button onClick={() => dispatch(closeTour())}>
            Start Simulation
          </Button>
        }
      />
      <div>
        <HomeHero
          properties={properties}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
        {/* <HomeOverview />
        <HomeRoles />
        <HomeTestimonials />
        <HomeFeatures />
        <HomeClients /> */}
      </div>
    </>
  );
};

export default Home;
