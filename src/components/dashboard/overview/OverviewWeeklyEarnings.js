import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from '@material-ui/core';
import { alpha, useTheme } from '@material-ui/core/styles';
import { Dock, Insights } from '@material-ui/icons';
import ArrowRightIcon from '../../../icons/ArrowRight';
import ChevronUpIcon from '../../../icons/ChevronUp';
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
  const theme = useTheme();
  const tasks = useSelector((state) => state.tasks || {});
  const dispatch = useDispatch();

  console.log('tasks', tasks);
  const handleTaskModalOpen = (taskId) => {
    console.log(taskId);
    dispatch(selectTask(taskId));
    dispatch(openModal());
  };

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(resetTask());
  };

  return (
    <Card {...props}>
      <CardContent
        sx={{
          alignItems: 'center',
          display: 'flex',
        }}
      >
        {/* <Box>
          <Avatar
            sx={{
              backgroundColor: alpha(theme.palette.success.main, 0.08),
              color: 'success.main',
              padding: 5,
              margin: 2,
            }}
            variant='rounded'
          >
            <Home fontSize='large' />
          </Avatar>
        </Box> */}
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            pl: 7,
          }}
        >
          <div>
            <Typography color='textPrimary' variant='h4'>
              1234 Main Street Miami Fl
            </Typography>
            <Typography color='textSecondary' sx={{ mt: 1 }} variant='overline'>
              For Sale: 11 Days on Market
            </Typography>
            <img
              alt='home'
              src='https://i.pinimg.com/736x/27/32/2d/27322d263fb23584b80c29a2f1ba0f1f.jpg'
              style={{
                height: '300px',
                width: 'auto',
                borderRadius: 30,
              }}
            />
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Avatar
            sx={{
              backgroundColor: alpha(theme.palette.success.main, 0.08),
              color: 'success.main',
            }}
            variant='rounded'
          >
            <ChevronUpIcon fontSize='small' />
          </Avatar>
        </Box>
        <GroupedList4
          tasks={tasks}
          handleClose={handleClose}
          handleTaskModalOpen={handleTaskModalOpen}
        />
      </CardContent>
      <Divider />
      <CardActions>
        <Button color='info' endIcon={<Dock fontSize='small' />} variant='text'>
          View NFT
        </Button>
        <Button
          color='primary'
          endIcon={<ArrowRightIcon fontSize='small' />}
          variant='text'
        >
          Edit Listing
        </Button>
        <Button
          color='primary'
          endIcon={<Insights fontSize='small' />}
          variant='text'
        >
          Market Your Home
        </Button>
      </CardActions>
    </Card>
  );
};

export default OverviewWeeklyEarnings;
