import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  // Button,
} from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import MenuIcon from '../../icons/Menu';
import AccountPopover from './AccountPopover';
// import ContactsPopover from './ContactsPopover';
import ContentSearch from './ContentSearch';
// import LanguagePopover from './LanguagePopover';
// import NotificationsPopover from './NotificationsPopover';

const DashboardNavbarRoot = experimentalStyled(AppBar)(
  ({ theme }) => ({
    ...(theme.palette.mode === 'light' && {
      backgroundColor: theme.palette.grey[100],
      marginTop: 7,
      boxShadow: 'none',
      borderBottom: `1px solid ${theme.palette.divider}`,
      color: theme.palette.primary.contrastText,
      // borderBottom: `1px solid ${theme.palette.divider}`,
    }),
    ...(theme.palette.mode === 'dark' && {
      backgroundColor: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.divider}`,
      boxShadow: 'none',
    }),
    zIndex: theme.zIndex.drawer + 100,
  }),
);

const DashboardNavbar = (props) => {
  const { onSidebarMobileOpen, ...other } = props;

  return (
    <DashboardNavbarRoot {...other}>
      <Toolbar sx={{ minHeight: 64 }}>
        <IconButton
          color="inherit"
          onClick={onSidebarMobileOpen}
          sx={{
            ml: 2,
            mt: 2,
            display: {
              lg: 'none',
            },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <RouterLink to="/">
          <img
            alt="finding spaces"
            src="https://firebasestorage.googleapis.com/v0/b/finding-spaces-73b23.appspot.com/o/assets%2Flogos%2Flogo%20idea-2-transparent%20extra%20extra%20extra%20small.png?alt=media&token=b2eab607-8c13-4cdf-96f2-99abd3451e17"
          />
        </RouterLink>
        <Typography
          sx={{
            mt: 0,
            mb: 1,
          }}
          variant="h6"
          color="textPrimary"
        >
          Property Dashboard
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            ml: 2,
          }}
        />
        {/* <LanguagePopover /> */}
        <Box sx={{ ml: 1 }}>
          <ContentSearch />
        </Box>
        {/* <Box sx={{ ml: 1 }}>
          <ContactsPopover />
        </Box> */}
        {/* <Box sx={{ ml: 1 }}>
          <Button>Search Marketplace</Button>
        </Box> */}
        <Box sx={{ ml: 2 }}>
          <AccountPopover />
        </Box>
      </Toolbar>
    </DashboardNavbarRoot>
  );
};

DashboardNavbar.propTypes = {
  onSidebarMobileOpen: PropTypes.func,
};

export default DashboardNavbar;
