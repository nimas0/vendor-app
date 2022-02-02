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
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CircularProgressWithLabel(props) {
  return (
    <>
      <Box
        sx={{
          width: '400px',
          height: '100px',
          textAlign: 'center',
          verticalAlign: 'center',
        }}
      >
        <Typography variant='h6' component='div' color='text.secondary'>
          {(props.value <= 20 && 'Contacting Vendor') ||
            (props.value <= 40 && 'Verifying Identity') ||
            (props.value <= 60 && 'Paying Vendor') ||
            (props.value <= 100 && 'Simulating Vendor Delivery')}
        </Typography>
      </Box>
    </>
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

export default function LoadingTask() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 20);
    }, 1200);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
