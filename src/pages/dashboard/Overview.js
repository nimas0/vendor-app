/* eslint-disable react/jsx-wrap-multilines */
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Button,
  // Card,
  // CardActions,
  // CardContent,
  // CardHeader,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import {
  // OverviewPrivateWallet,
  OverviewTotalBalance,
  // OverviewTotalTransactions,
  OverviewWeeklyEarnings,
} from '../../components/dashboard/overview';
import useSettings from '../../hooks/useSettings';

// import ExternalLinkIcon from '../../icons/ExternalLink';
// import InformationCircleIcon from '../../icons/InformationCircle';
import PlusIcon from '../../icons/Plus';

import gtm from '../../lib/gtm';
import useAuth from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { getClaimed } from '../../slices/tasks';
import Tour from 'reactour';

const Overview = () => {
  const { settings } = useSettings();
  const dispatch = useDispatch();
  const user = useAuth();
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const [tour, setTour] = useState(true);
  const steps = [
    {
      selector: '#body',
      content: 'Home Claimed! Now you are ready to sell your home. ',
    },
    {
      selector: '#wallet',
      content:
        'This is your wallet. Here is your NFT and some space tokens to purchase services',
    },
    {
      selector: '#taskbar',
      content:
        'Complete these tasks to simulate using space tokens and selling your NFT',
    },
  ];

  useEffect(() => {
    dispatch(getClaimed(user.user.id));
  }, []);

  console.log('user!', user.user.id);
  return (
    <>
      <Helmet>
        <title>Dashboard: Finding Spaces</title>
      </Helmet>
      <Tour
        disableInteraction
        steps={steps}
        isOpen={tour}
        onRequestClose={() => setTour(false)}
        lastStepNextButton={
          <Button onClick={() => setTour(false)}>
            Start Simulation
          </Button>
        }
      />
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          p: 8,
        }}
      >
        <Container maxWidth={settings.compact ? 'xl' : false}>
          <Grid container spacing={4}>
            <Grid
              alignItems="center"
              container
              justifyContent="flex-start"
              spacing={3}
              item
              xs={12}
            >
              <Grid item>
                <Typography color="textPrimary" variant="h5">
                  My Properties
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  Here is a list of your claimed properties
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  startIcon={<PlusIcon fontSize="small" />}
                  variant="contained"
                >
                  Claim Existing Property
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  startIcon={<PlusIcon fontSize="small" />}
                  variant="contained"
                >
                  Buy New Property
                </Button>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={3}
              justifyContent="flex-start"
              alignItems="stretch"
              item
            >
              <Grid item md={9}>
                <OverviewWeeklyEarnings />
                {/* <OverviewPrivateWallet />
                <br />
                <OverviewPrivateWallet /> */}
              </Grid>
              <Grid item md={3} xs={12}>
                <OverviewTotalBalance />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Overview;
