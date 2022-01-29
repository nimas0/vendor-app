import { formatDistanceToNowStrict, subHours, subMinutes } from 'date-fns';
import numeral from 'numeral';
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Link,
  Rating,
  Tooltip,
  Typography,
} from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import UsersIcon from '../../../icons/Users';

const now = new Date();

const projects = [
  {
    id: '5e8dcef8f95685ce21f16f3d',
    author: {
      id: '5e887b7602bdbc4dbb234b27',
      avatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
      name: 'Jie Yan Song',
    },
    budget: 1186000.0,
    caption:
      "Spectacular, magazine quality estate on a private road in University Park. Just a short walk to FIU's lush campus. Built in 2018 on a 1/2+ acre corner lot. Light-filled, open living spaces w/dramatic 12' ceilings & porcelain tile flooring, Sleek, modern style interior features a white color palette throughout.",
    currency: '$',
    isLiked: true,
    likes: 7,
    location: '2 Bed',
    image:
      'https://photos.zillowstatic.com/fp/4ff708ca92c1936b1ed0fc58fd7b5f4d-uncropped_scaled_within_1536_1152.webp',
    rating: 5,
    membersCount: 2,
    title: '10914 SW 26 ST Miami Fl',
    type: '3,738 sq/ft',
    updatedAt: subMinutes(now, 24).getTime(),
  },
  {
    id: '5e8dcf076c50b9d8e756a5a2',
    author: {
      id: '5e887d0b3d090c1b8f162003',
      avatar: '/static/mock-images/avatars/avatar-omar_darobe.png',
      name: 'Omar Darobe',
    },
    budget: 500900.0,
    caption:
      "This single-story condo includes a spacious open layout o ering seamless transition between the family room, kitchen and dining room, while two owner's suites can be found on either side of the main living and dining space",
    currency: '$',
    isLiked: true,
    likes: 12,
    location: '4 bed',
    image:
      'https://photos.zillowstatic.com/fp/4c468ea5f07030f011ecb86f8cbbfbca-cc_ft_768.webp',
    rating: 4.5,
    membersCount: 3,
    title: '3131 NE 7 AVE UNIT 5001 Miami Fl',
    type: '5,000 sq/ft',
    updatedAt: subHours(now, 1).getTime(),
  },
  {
    id: '5e8dcf105a6732b3ed82cf7a',
    author: {
      id: '5e88792be2d4cfb4bf0971d9',
      avatar: '/static/mock-images/avatars/avatar-siegbert_gottfried.png',
      name: 'Siegbert Gottfried',
    },
    budget: 449000.0,
    caption:
      'UNIQUE, TWP STORIES UNIT. BRAND NEW GATED COMMUNITY. TWO BED AND 2 1/2 BATH. THE UNIT IS FULLY FUNISHED WITH CUSTON KITCHEN.',
    currency: '$',
    isLiked: true,
    likes: 18,
    location: '3 bed',
    image:
      'https://photos.zillowstatic.com/fp/43e9757b30f648ee139dc49d775b7f2a-uncropped_scaled_within_1536_1152.webp',
    rating: 4.7,
    membersCount: 8,
    title: '2555 NE 193rd St #2219, Miami, FL 33180',
    type: '1,325 sq/ft',
    updatedAt: subHours(now, 16).getTime(),
  },
];

const GridList2 = () => (
  <Box
    mb={2}
    display='flex'
    flexDirection='column'
    // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
    height='800px' // fixed the height
    style={{
      overflow: 'hidden',
      overflowY: 'scroll', // added scroll
    }}
    sx={{
      backgroundColor: 'transparent',

      pt: 6,
      pl: 3,
      pr: 9,
    }}
  >
    <Grid container spacing={3}>
      <Typography sx={{ pl: 4, mt: 6, mb: 0, color: 'white' }} variant='h6'>
        Miami FL Real Estate & Homes For Sale
      </Typography>
      {projects.map((project) => (
        <Grid item key={project.id} md={12} xs={12}>
          <Card elevation={7}>
            <Box>
              <CardMedia
                image={project.image}
                sx={{
                  backgroundColor: 'transparent',
                  height: 180,
                }}
              />
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  mt: 2,
                  p: 2,
                }}
              >
                <Avatar src={project.author.avatar} />
                <Box sx={{ ml: 2 }}>
                  <Link color='textPrimary' variant='h6'>
                    {project.title}
                  </Link>
                  <Typography color='textSecondary' variant='body2'>
                    by{' '}
                    <Link color='textPrimary' variant='subtitle2'>
                      {project.author.name}
                    </Link>{' '}
                    | Updated {formatDistanceToNowStrict(project.updatedAt)} ago
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                pb: 2,
                px: 3,
              }}
            >
              <Typography color='textSecondary' variant='body2'>
                {project.caption}
              </Typography>
            </Box>
            <Box
              sx={{
                px: 3,
                py: 2,
              }}
            >
              <Grid
                alignItems='center'
                container
                justifyContent='space-between'
                spacing={3}
              >
                <Grid item>
                  <Typography color='textPrimary' variant='subtitle2'>
                    {numeral(project.budget).format(
                      `${project.currency}0,0.00`
                    )}
                  </Typography>
                  <Typography color='textSecondary' variant='body2'>
                    Budget
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color='textPrimary' variant='subtitle2'>
                    {project.location}
                  </Typography>
                  <Typography color='textSecondary' variant='body2'>
                    Location
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color='textPrimary' variant='subtitle2'>
                    {project.type}
                  </Typography>
                  <Typography color='textSecondary' variant='body2'>
                    Type
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Divider />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                pl: 2,
                pr: 3,
                py: 2,
              }}
            >
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <Tooltip title='Unlike'>
                  <IconButton sx={{ color: red['600'] }}>
                    <FavoriteIcon fontSize='small' />
                  </IconButton>
                </Tooltip>
                <Typography color='textSecondary' variant='subtitle2'>
                  {project.likes}
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  ml: 2,
                }}
              >
                <UsersIcon fontSize='small' />
                <Typography
                  color='textSecondary'
                  sx={{ ml: 1 }}
                  variant='subtitle2'
                >
                  {project.membersCount}
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Rating readOnly size='small' value={project.rating} />
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default GridList2;
