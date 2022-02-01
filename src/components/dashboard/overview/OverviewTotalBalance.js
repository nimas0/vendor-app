/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-max-props-per-line */
import numeral from 'numeral';
import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  Typography,
} from '@material-ui/core';
import ArrowRightIcon from '../../../icons/ArrowRight';
import { getBalance } from '../../../slices/wallet';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const OverviewTotalBalance = (props) => {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet);
  const status = useSelector((state) => state.wallet.status);
  useEffect(async () => {
    await dispatch(getBalance());
  }, []);

  const currencies = [
    {
      amount: wallet.data.balanceSPACE,
      color: '#6C76C4',
      name: 'Space Tokens',
    },
    {
      amount: 500000.81,
      color: '#FF4081',
      name: 'NFT (1234 Main Street) - Est Value: ',
    },
  ];

  return (
    <Card id='wallet' {...props}>
      <CardHeader
        subheader={
          status !== 'loading' ? (
            <Typography color='textPrimary' variant='h4'>
              ₳{numeral(wallet.data.balanceADA).format('0,0.00')}
            </Typography>
          ) : (
            <Skeleton variant='rectangular' width='auto' height={40} />
          )
        }
        sx={{ pb: 0 }}
        title={
          status !== 'loading' ? (
            <Typography color='textSecondary' variant='overline'>
              Total Ada
            </Typography>
          ) : (
            <Typography color='textSecondary' variant='overline'>
              Loading Wallet
            </Typography>
          )
        }
      />
      <CardContent>
        <Divider sx={{ mb: 2 }} />
        <Typography color='textSecondary' variant='overline'>
          Wallet Details
        </Typography>
        <List disablePadding sx={{ pt: 2 }}>
          {currencies.map((currency) => (
            <ListItem
              disableGutters
              key={currency.name}
              sx={{
                pb: 2,
                pt: 0,
              }}
            >
              <ListItemText
                disableTypography
                primary={
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Badge
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      variant='dot'
                      sx={{
                        pl: '20px',
                        '& .MuiBadge-badge': {
                          backgroundColor: currency.color,
                          left: 6,
                          top: 11,
                        },
                      }}
                    >
                      <Typography color='textPrimary' variant='subtitle2'>
                        {currency.name}
                      </Typography>
                    </Badge>
                    <Typography color='textSecondary' variant='subtitle2'>
                      {numeral(currency.amount).format('$0,0.00')}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box
          sx={{
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            pt: 2,
          }}
        >
          <Button
            color='primary'
            endIcon={<ArrowRightIcon fontSize='small' />}
            variant='text'
          >
            Add tokens
          </Button>
          <Button
            color='primary'
            endIcon={<ArrowRightIcon fontSize='small' />}
            variant='text'
          >
            Add Ada
          </Button>
          <Button
            color='primary'
            endIcon={<ArrowRightIcon fontSize='small' />}
            variant='text'
          >
            Withdraw funds
          </Button>
          <Button
            color='primary'
            endIcon={<ArrowRightIcon fontSize='small' />}
            variant='text'
          >
            Stake Funds
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OverviewTotalBalance;
