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

const OverviewWeeklyEarnings = (props) => {
  // const theme = useTheme();
  const claims = useSelector((state) => (state && state.tasks) || []);
  const dispatch = useDispatch();

  console.log('tasks', claims);
  const handleTaskModalOpen = (propertyId, taskId) => {
    console.log('handleTaskModal', propertyId, taskId);
    dispatch(selectTask(propertyId, taskId));
    dispatch(openModal(propertyId));
  };

  const handleClose = (propertyId) => {
    dispatch(closeModal(propertyId));
    dispatch(resetTask(propertyId));
  };

  return (
    <>
      {claims.map((task, i) => {
        if (i > 0) {
          return '';
        }
        return (
          <Card sx={{ my: 2 }} {...props}>
            <CardContent>
              <Grid
                container
                spacing={3}
                sx={{
                  p: 7,
                }}
              >
                <Grid xs={12}>
                  {' '}
                  <Typography color="textPrimary" variant="h5">
                    15573 SW 32 TER MIAMI FL
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{ mt: 1 }}
                    variant="overline"
                  >
                    For Sale: 11 Days on Market
                  </Typography>
                </Grid>
                <Grid item md={12} lg={6} xl={8}>
                  <div>
                    <img
                      alt="home"
                      src="https://i.pinimg.com/736x/27/32/2d/27322d263fb23584b80c29a2f1ba0f1f.jpg"
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
                    tasks={task}
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
                color="primary"
                endIcon={<ArrowRightIcon fontSize="small" />}
                variant="text"
              >
                Edit Listing
              </Button>
              <Button
                color="primary"
                endIcon={<Insights fontSize="small" />}
                variant="text"
              >
                Market Your Home
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default OverviewWeeklyEarnings;
