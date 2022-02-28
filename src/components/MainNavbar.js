/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  alpha,
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '../icons/Menu';
import { styled } from '@material-ui/styles';
import { SearchTwoTone } from '@material-ui/icons';
import AccountPopover from './dashboard/AccountPopover';
import { useSelector, useDispatch } from 'react-redux';
import { openTour } from '../slices/properties';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.55),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.85),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

const MainNavbar = (props) => {
  const { onSidebarMobileOpen } = props;
  const propertyCount = useSelector(
    (state) => state.properties.properties.length,
  );
  const dispatch = useDispatch();

  console.log('propertyCount', propertyCount);

  return (
    <AppBar
      elevation={3}
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',

        pt: 1,
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        <IconButton
          color="inherit"
          onClick={onSidebarMobileOpen}
          sx={{
            display: {
              md: 'none',
            },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>

        <Button
          variant="link"
          href="https://findingspaces.com"
          color="primary"
        >
          <Typography variant="h6" />
        </Button>
        <Divider
          orientation="vertical"
          sx={{
            height: 22,
            mx: 2,
            backgroundColor: 'transparent',
          }}
        />
        <Button
          size="lg"
          variant="link"
          href="https://findingspaces.com"
          color="primary"
        >
          <Typography variant="h6"> </Typography>
        </Button>
        <Divider
          orientation="vertical"
          sx={{
            height: 22,
            mx: 2,
          }}
        />
        <Button
          size="lg"
          variant="link"
          href="https://findingspaces.com"
          color="primary"
        >
          <Typography variant="h6"> </Typography>
        </Button>

        <Box sx={{ flexGrow: 1 }} />
        <RouterLink to="/">
          <img
            alt="finding spaces"
            src="https://firebasestorage.googleapis.com/v0/b/finding-spaces-73b23.appspot.com/o/logo%20idea-2-transparent.png?alt=media&token=0bc11614-2775-4c8c-8052-c897afb2b336"
          />
        </RouterLink>
        <Box sx={{ flexGrow: 1, marginLeft: 27 }} />
        <Box
          sx={{
            alignItems: 'center',
            display: {
              md: 'flex',
              xs: 'none',
            },
            mb: 1,
          }}
        >
          <Button
            sx={{ mx: 3 }}
            color="primary"
            onClick={() => dispatch(openTour())}
            to="/dashboard"
            variant="contained"
          >
            Guided Simulation
          </Button>

          <Button
            color="primary"
            component={RouterLink}
            to="/dashboard"
            variant="link"
          >
            Dashboard
          </Button>

          <Box sx={{ ml: 2 }}>
            <AccountPopover />
          </Box>
        </Box>
      </Toolbar>
      <Toolbar
        elevation={3}
        sx={{
          minHeight: 64,
          backgroundColor: '#2B2E35',
          borderRadius: 0,
        }}
      >
        {' '}
        <Search>
          <SearchIconWrapper>
            <SearchTwoTone />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Button
          sx={{ m: 1, backgroundColor: 'white', color: 'black' }}
          variant="contained"
        >
          For Sale
        </Button>
        <Button
          sx={{ m: 1, backgroundColor: 'white', color: 'black' }}
          variant="contained"
        >
          Price
        </Button>
        <Button
          sx={{ m: 1, backgroundColor: 'white', color: 'black' }}
          variant="contained"
        >
          Bed & Baths
        </Button>
        <Button
          sx={{ m: 1, backgroundColor: 'white', color: 'black' }}
          variant="contained"
        >
          Home Type
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Typography
          variant="h6"
          sx={{ color: 'white', fontWeight: 'lighter' }}
        >
          Showing {propertyCount} of {propertyCount} Results
        </Typography>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

MainNavbar.propTypes = {
  onSidebarMobileOpen: PropTypes.func,
};

export default MainNavbar;
