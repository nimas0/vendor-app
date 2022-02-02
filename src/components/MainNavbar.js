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
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '../icons/Menu';
import { styled } from '@material-ui/styles';
import { SearchTwoTone } from '@material-ui/icons';

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

  return (
    <AppBar
      elevation={3}
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.secondary',
        pt: 1,
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        <IconButton
          color='inherit'
          onClick={onSidebarMobileOpen}
          sx={{
            display: {
              md: 'none',
            },
          }}
        >
          <MenuIcon fontSize='small' />
        </IconButton>

        <Link
          color='textSecondary'
          component={RouterLink}
          to='/browse'
          underline='none'
          variant='body1'
        >
          Sell
        </Link>
        <Divider
          orientation='vertical'
          sx={{
            height: 32,
            mx: 2,
            backgroundColor: 'transparent',
          }}
        />
        <Link
          color='textSecondary'
          component={RouterLink}
          to='/docs'
          underline='none'
          variant='body1'
        >
          Buy
        </Link>
        <Divider
          orientation='vertical'
          sx={{
            height: 32,
            mx: 2,
          }}
        />
        <Link
          color='textSecondary'
          component={RouterLink}
          to='/docs'
          underline='none'
          variant='body1'
        >
          Claim Home
        </Link>

        <Box sx={{ flexGrow: 1 }} />
        <RouterLink to='/'>
          <img
            alt='finding spaces'
            src='https://firebasestorage.googleapis.com/v0/b/finding-spaces-73b23.appspot.com/o/logo%20idea-2-transparent.png?alt=media&token=0bc11614-2775-4c8c-8052-c897afb2b336'
          />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            alignItems: 'center',
            display: {
              md: 'flex',
              xs: 'none',
            },
          }}
        >
          <Link
            color='textSecondary'
            component={RouterLink}
            to='/browse'
            underline='none'
            variant='body1'
          >
            Sign up
          </Link>
          <Divider
            orientation='vertical'
            sx={{
              height: 32,
              mx: 2,
            }}
          />
          <Link
            color='textSecondary'
            component={RouterLink}
            to='/docs'
            underline='none'
            variant='body1'
          >
            Sign In
          </Link>
          <Divider
            orientation='vertical'
            sx={{
              height: 32,
              mx: 2,
            }}
          />
          <Button
            color='primary'
            component={RouterLink}
            to='/dashboard'
            size='small'
            variant='contained'
          >
            Dashboard
          </Button>
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
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Button
          sx={{ m: 1, backgroundColor: 'white', color: 'black' }}
          variant='contained'
        >
          For Sale
        </Button>
        <Button
          sx={{ m: 1, backgroundColor: 'white', color: 'black' }}
          variant='contained'
        >
          Price
        </Button>
        <Button
          sx={{ m: 1, backgroundColor: 'white', color: 'black' }}
          variant='contained'
        >
          Bed & Baths
        </Button>
        <Button
          sx={{ m: 1, backgroundColor: 'white', color: 'black' }}
          variant='contained'
        >
          Home Type
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant='h6' sx={{ color: 'white' }}>
          Search Results 3 of 3
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
