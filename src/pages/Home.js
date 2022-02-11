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
import useAuth from '../hooks/useAuth';

const Home = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties);
  const { user } = useAuth();

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
    console.log('authid', user);
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
      </div>
    </>
  );
};

export default Home;
