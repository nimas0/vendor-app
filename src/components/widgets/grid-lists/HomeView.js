/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  formatDistanceToNowStrict,
  subHours,
  subMinutes,
} from 'date-fns';
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
import {
  BedroomParentRounded,
  ShowerRounded,
} from '@material-ui/icons';

const GridList2 = ({ properties, handleOpen }) => (
  <Box
    id="homeview"
    mb={2}
    display="flex"
    flexDirection="column"
    height="800px" // fixed the height
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
      <Typography
        sx={{ pl: 4, mt: 6, mb: 0, color: 'black' }}
        variant="h6"
      >
        Miami FL Real Estate & Homes For Sale
      </Typography>
      {properties.map((property, i) => (
        <Grid item key={property.id} md={12} xs={12}>
          <Card
            onClick={() => handleOpen(property.id)}
            sx={{
              '&:hover': {
                cursor: 'pointer',
                boxShadow: '0px 11px 22px rgba(0,0,0, 0.25)',
                transition: '0.15s ease-in-out',
              },
            }}
            elevation={7}
          >
            <Box>
              <CardMedia
                image={property.image}
                sx={{
                  backgroundColor: 'transparent',
                  height: 180,
                }}
              />
            </Box>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                pl: 2,
                pr: 3,
                py: 2,
              }}
            >
              <Typography color="textPrimary" variant="h6">
                {numeral(property.valuation.value).format('$0,0')}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <Tooltip title="Unlike">
                  <IconButton sx={{ color: red['600'] }}>
                    <FavoriteIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Typography color="textSecondary" variant="subtitle2">
                  {property.likes}
                </Typography>
              </Box>

              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  ml: 2,
                }}
              >
                <UsersIcon fontSize="small" />
                <Typography
                  color="textSecondary"
                  sx={{ ml: 1 }}
                  variant="subtitle2"
                >
                  {property.showings}
                </Typography>
              </Box>
              <Divider
                orientation="vertical"
                sx={{
                  height: 32,
                  mx: 2,
                  backgroundColor: 'transparent',
                }}
              />
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <Typography
                  sx={{ mr: 1 }}
                  color="textPrimary"
                  variant="overline"
                >
                  {property.structure.beds_count}
                </Typography>
                <Tooltip title="Bedrooms">
                  <Typography variant="caption">Bds</Typography>
                </Tooltip>
              </Box>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <Typography
                  sx={{ mr: 0.5, ml: 2 }}
                  color="textPrimary"
                  variant="overline"
                >
                  {property.structure.baths}
                </Typography>
                <Tooltip title="Bathrooms">
                  <Typography variant="caption">ba</Typography>
                </Tooltip>
              </Box>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <Typography
                  sx={{ mr: 0.5, ml: 2 }}
                  color="textPrimary"
                  variant="overline"
                >
                  {property.structure.total_area_sq_ft}
                </Typography>
                <Tooltip title="Square Feet">
                  <Typography variant="caption">sqft</Typography>
                </Tooltip>
              </Box>
            </Box>
            <Divider />
            <Box
              sx={{
                px: 3,
                py: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{ textTransform: 'capitalize' }}
              >
                {`${property.address.formatted_street_address} ${property.address.city} ${property.address.state}`}{' '}
              </Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default GridList2;
