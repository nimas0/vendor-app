/* eslint-disable react/jsx-wrap-multilines */
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Divider,
  Link,
  Typography,
  CardHeader,
  Button,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const applicants = [
  {
    id: '5e887a62195cc5aef7e8ca5d',
    avatar: '/static/mock-images/avatars/avatar-marcus_finn.png',
    commonConnections: 12,
    cover: '/static/mock-images/covers/cover_2.jpg',
    name: 'Marcus Finn',
    skills: 'Photography',
  },
  {
    id: '5e887ac47eed253091be10cb',
    avatar: '/static/mock-images/avatars/avatar-carson_darrin.png',
    commonConnections: 5,
    cover: '/static/mock-images/covers/cover_3.jpg',
    name: 'Carson Darrin',
    skills: 'Photography',
  },
  {
    id: '5e86809283e28b96d2d38537',
    avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
    commonConnections: 17,
    cover: '/static/mock-images/covers/cover_1.jpg',
    name: 'Jane Rotanson',
    skills: 'Appraiser',
  },
  {
    id: '5e86809283e28b96d2d38537',
    avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
    commonConnections: 17,
    cover: '/static/mock-images/covers/cover_1.jpg',
    name: 'Jane Rotanson',
    skills: 'Home Inspector',
  },
  {
    id: '5e86809283e28b96d2d38537',
    avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
    commonConnections: 17,
    cover: '/static/mock-images/covers/cover_1.jpg',
    name: 'Jane Rotanson',
    skills: 'Photographer',
  },
  {
    id: '5e86809283e28b96d2d38537',
    avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
    commonConnections: 17,
    cover: '/static/mock-images/covers/cover_1.jpg',
    name: 'Jane Rotanson',
    skills: 'Lawyer',
  },
];

const StorePage = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      p: 3,
    }}
  >
    <Grid container spacing={3}>
      {applicants.map((applicant) => (
        <Grid item key={applicant.id} md={4} xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography align='center' variant='h6'>
                  {applicant.skills}
                </Typography>
              }
            />
            <CardMedia image={applicant.cover} sx={{ height: 200 }} />
            <CardContent sx={{ pt: 0 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2,
                  mt: '-50px',
                }}
              >
                <Avatar
                  alt='Applicant'
                  src={applicant.avatar}
                  sx={{
                    border: '3px solid #FFFFFF',
                    height: 100,
                    width: 100,
                  }}
                />
              </Box>
              <Link
                align='center'
                color='textPrimary'
                display='block'
                underline='none'
                variant='h6'
              >
                {applicant.name}
              </Link>
              <Typography align='center' variant='body2' color='textSecondary'>
                <Rating name='read-only' value={5} readOnly />{' '}
                <div sx={{ pb: 1 }}> {applicant.commonConnections} reviews</div>
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Button align='center' variant='outlined' sx={{ m: -0.5 }}>
                <Typography align='center' variant='h6'>
                  Order Now
                </Typography>
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default StorePage;
