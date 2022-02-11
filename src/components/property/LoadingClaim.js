/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NFT from '../../assets/Token.gif';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', mr: 3 }}>
      <CircularProgress size={200} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >
          {`${Math.round(props.value)}% `}
          <br />
          {(props.value <= 20 && 'Checking background') ||
            (props.value <= 40 && 'Verifying Identity') ||
            (props.value <= 60 && 'Retrieving Original Deed') ||
            (props.value <= 100 && 'Generating NFT')}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function LoadingClaim({ onClose }) {
  const [progress, setProgress] = React.useState(0);
  const [view, setView] = React.useState(null);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setView('nft');
        }

        return prevProgress + 10;
      });
    }, 1200);
    return () => {
      onClose();
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {view ? (
        <>
          <div sx={{ display: 'flex', flexDirection: 'column' }}>
            <p>Home Claimed! Redirecting you to your dashboard...</p>
            <img src={NFT} alt="NFT" />
          </div>
        </>
      ) : (
        <CircularProgressWithLabel value={progress} />
      )}
    </>
  );
}
