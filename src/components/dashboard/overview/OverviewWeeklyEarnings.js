/* eslint-disable operator-linebreak */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
// import { useTheme } from '@material-ui/core/styles';
import { Dock, Insights } from '@material-ui/icons';
import ArrowRightIcon from '../../../icons/ArrowRight';
// import { Home } from '@material-ui/icons';
import GroupedList4 from '../../widgets/grouped-lists/GroupedList4';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModal,
  openModal,
  resetTask,
  selectTask,
} from '../../../slices/tasks';
import numeral from 'numeral';

const OverviewWeeklyEarnings = (props) => {
  // const theme = useTheme();
  const claims = useSelector((state) => (state && state.tasks) || {});
  const dispatch = useDispatch();

  console.log('taskss', claims);
  const handleTaskModalOpen = (taskId) => {
    console.log('handleTaskModal', taskId);
    dispatch(selectTask(taskId));
    dispatch(openModal());
  };

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(resetTask());
  };

  return (
    <>
      <Card sx={{ my: 2 }} {...props}>
        <CardContent>
          <Grid
            container
            spacing={3}
            sx={{
              p: 7,
            }}
          >
            <Grid xs={9}>
              {' '}
              <Typography color="textPrimary" variant="h5">
                {claims &&
                  `${claims.propertyData.propertyData.formatted_street_address} - ${claims.propertyData.propertyData.city} ${claims.propertyData.propertyData.state}`}
              </Typography>
              <Typography
                color="primary"
                sx={{ mt: 1, display: 'inline' }}
                variant="h6"
              >
                {numeral(
                  claims.propertyData.value.total_value,
                ).format('$0,0.00')}{' '}
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ mt: 1, display: 'inline' }}
                variant="subtitle1"
              >
                - Estimated Market Value
              </Typography>
            </Grid>
            <Grid xs={3}>
              <Button fullWidth variant="outlined">
                List Property For Sale
              </Button>
            </Grid>
            <Grid item md={12} lg={6} xl={8}>
              <div>
                <img
                  alt="home"
                  src={claims.propertyData.image || ''}
                  style={{
                    hieght: 'auto',
                    width: '100%',
                    borderRadius: 20,
                  }}
                />
              </div>
            </Grid>
            <Grid item md={12} lg={6} xl={4}>
              <GroupedList4
                tasks={claims}
                handleClose={handleClose}
                handleTaskModalOpen={handleTaskModalOpen}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="info"
            endIcon={<Dock fontSize="small" />}
            variant="text"
          >
            View NFT
          </Button>
          <Button
            disabled
            color="primary"
            endIcon={<ArrowRightIcon fontSize="small" />}
            variant="text"
          >
            Edit Listing
          </Button>
          <Button
            disabled
            color="primary"
            endIcon={<Insights fontSize="small" />}
            variant="text"
          >
            Market Your Home
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default OverviewWeeklyEarnings;
