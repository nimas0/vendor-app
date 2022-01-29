import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Paper,
  Switch,
  Typography,
} from '@material-ui/core';

const connections = [
  {
    id: '5e887ac47eed253091be10cb',
    avatar: '/static/mock-images/avatars/avatar-carson_darrin.png',
    commonConnections: 'This is a great question',
    name: 'Carson Darrin',
    status: 'Public',
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
    commonConnections: "I answered this question but don't want to share",
    name: 'Fran Perez',
    status: 'Private',
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    avatar: '/static/mock-images/avatars/avatar-miron_vitold.png',
    commonConnections: 'This is another question that hasnt been answered',
    name: 'Miron Vitold',
    status: 'Pending',
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
    commonConnections: "I answered this question but don't want to share",
    name: 'Fran Perez',
    status: 'Private',
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    avatar: '/static/mock-images/avatars/avatar-miron_vitold.png',
    commonConnections: 'This is another question that hasnt been answered',
    name: 'Miron Vitold',
    status: 'Pending',
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
    commonConnections: "I answered this question but don't want to share",
    name: 'Fran Perez',
    status: 'Private',
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    avatar: '/static/mock-images/avatars/avatar-miron_vitold.png',
    commonConnections: 'This is another question that hasnt been answered',
    name: 'Miron Vitold',
    status: 'Pending',
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
    commonConnections: "I answered this question but don't want to share",
    name: 'Fran Perez',
    status: 'Private',
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    avatar: '/static/mock-images/avatars/avatar-miron_vitold.png',
    commonConnections: 'This is another question that hasnt been answered',
    name: 'Miron Vitold',
    status: 'Pending',
  },
];

const Questions = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      p: 3,
    }}
  >
    <Grid container spacing={3}>
      {connections.map((connection) => (
        <Grid item key={connection.id} xs={12}>
          <Paper variant='outlined'>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                p: 2,
              }}
            >
              <Avatar
                src={connection.avatar}
                sx={{
                  height: 60,
                  width: 60,
                }}
              />
              <Box
                sx={{
                  flexGrow: 1,
                  mx: 2,
                }}
              >
                <Link color='textPrimary' variant='h5'>
                  {connection.name}
                </Link>
                <Typography color='textSecondary' gutterBottom variant='body2'>
                  {connection.commonConnections}
                </Typography>
                <Button color='primary' size='small' variant='outlined'>
                  {connection.status}
                </Button>
              </Box>
              <IconButton>
                <Switch
                  defaultChecked
                  color='primary'
                  inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Questions;
