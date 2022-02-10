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
import { getBalance, getNft } from '../../../slices/wallet';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AnimatedNumber from 'animated-number-react';
import useAuth from '../../../hooks/useAuth';

const OverviewTotalBalance = (props) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const wallet = useSelector((state) => state.wallet);

  useEffect(async () => {
    dispatch(getBalance(user.walletAddress));
    dispatch(getNft());
  }, []);

  const currencies = [
    {
      // amount: wallet.data.balanceADA,
      color: '#6C76C4',
      name: 'Ada',
      type: 'token',
    },
    {
      amount: 1,
      id: 'FS1643812270',
      link: 'https://testnet.cardanoscan.io/transaction/47069722864814ba992a33831fb89accbc6e96cbcc72968ac8a2d9327537a545',
      color: '#FF4081',
      name: '15573 SW 32 TER MIAMI FL',
      type: 'nft',
    },
  ];

  return (
    <Card
      style={{ border: 'none', boxShadow: 'none' }}
      sx={{
        backgroundColor: 'transparent',
        borderStyle: 'none',
      }}
      id="wallet"
      {...props}
    >
      <CardHeader
        subheader={
          wallet.status !== 'loading' ? (
            <Typography color="textPrimary" variant="h4">
              <AnimatedNumber
                value={wallet && wallet.data.balanceSPACE}
                formatValue={(value) => value.toFixed(2)}
              />{' '}
              Space Tokens
            </Typography>
          ) : (
            <Skeleton
              variant="rectangular"
              width="auto"
              height={40}
            />
          )
        }
        sx={{ pb: 0 }}
        title={
          wallet.status !== 'loading' ? (
            <Typography color="textSecondary" variant="overline">
              Total Space Tokens
            </Typography>
          ) : (
            <Typography color="textSecondary" variant="overline">
              Loading Wallet
            </Typography>
          )
        }
      />
      <CardContent>
        <Divider sx={{ mb: 2 }} />
        <Typography color="textSecondary" variant="overline">
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
                      variant="dot"
                      sx={{
                        pl: '20px',
                        '& .MuiBadge-badge': {
                          backgroundColor: currency.color,
                          left: 6,
                          top: 11,
                        },
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="subtitle2"
                      >
                        {currency.name}
                      </Typography>
                    </Badge>
                    {currency.type === 'nft' ? (
                      <Button
                        href={currency.link}
                        target="_blank"
                        color="textSecondary"
                        variant="subtitle2"
                      >
                        View NFT
                      </Button>
                    ) : (
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                      >
                        {numeral(currency.amount / 1000000).format(
                          '$0,0.00',
                        )}
                      </Typography>
                    )}
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
            href="https://testnet.cardanoscan.io/address/6072cf7930333871a8d65f72ad4d46d152dbe79e921ac180a5a5b17c8b"
            target="_blank"
            color="primary"
            endIcon={<ArrowRightIcon fontSize="small" />}
            variant="text"
          >
            View Wallet Testnet
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OverviewTotalBalance;
