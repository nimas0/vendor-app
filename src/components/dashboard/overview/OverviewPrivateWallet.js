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
import ArrowRightIcon from '../../../icons/ArrowRight';
import ChevronUpIcon from '../../../icons/ChevronUp';
import { Dock, Home, TransferWithinAStation } from '@material-ui/icons';

const OverviewWeeklyEarnings = (props) => {
  const theme = useTheme();

  return (
    <Card {...props}>
      <CardContent
        sx={{
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Box>
          <Avatar
            sx={{
              backgroundColor: alpha(theme.palette.success.main, 0.08),
              color: 'black',
              padding: 5,
              margin: 2,
            }}
            variant='rounded'
          >
            <Home fontSize='large' color='black' />
          </Avatar>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flex: 1,
          }}
        >
          <div>
            <Typography color='textPrimary' variant='h4'>
              3434 Real One Blvd Miami Fl
            </Typography>
            <Typography color='textSecondary' sx={{ mt: 1 }} variant='overline'>
              Owned since 2008
            </Typography>
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
      </CardContent>
      <Divider />
      <CardActions>
        <Button color='info' endIcon={<Dock fontSize='small' />} variant='text'>
          View NFT
        </Button>
        <Button
          color='info'
          endIcon={<TransferWithinAStation fontSize='small' />}
          variant='text'
        >
          Transfer
        </Button>
        <Button
          color='info'
          endIcon={<ArrowRightIcon fontSize='small' />}
          variant='text'
        >
          List for Sale
        </Button>
      </CardActions>
    </Card>
  );
};

export default OverviewWeeklyEarnings;
