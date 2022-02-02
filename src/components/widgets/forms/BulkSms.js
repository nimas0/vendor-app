/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-wrap-multilines */
import { useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Divider,
  FormControlLabel,
  Input,
  Paper,
  Radio,
  RadioGroup,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import MultiSelect from '../../MultiSelect';
import { Add, Message } from '@material-ui/icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import parsePhoneNumber from 'libphonenumber-js';
import toast, { Toaster } from 'react-hot-toast';

const selectOptions = [
  {
    label: 'Location',
    options: [],
  },
  //   {
  //     label: 'Level',
  //     options: ['Novice', 'Expert'],
  //   },
  //   {
  //     label: 'Location',
  //     options: [
  //       'Africa',
  //       'Asia',
  //       'Australia',
  //       'Europe',
  //       'North America',
  //       'South America',
  //     ],
  //   },
  //   {
  //     label: 'Roles',
  //     options: ['Android', 'Web Developer', 'iOS'],
  //   },
];

const formatPhoneNumber = (str) => {
  // Filter only numbers from the input
  const cleaned = `${str}`.replace(/\D/g, '');

  // Check if the input is of correct length
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return null;
};

const typeOptions = [
  {
    description: '2702312537',
    title: 'Houston, TX',
    value: 'houston',
  },
  {
    description: '2702312537',
    title: 'Jacksonville, FL',
    value: 'jacksonville',
  },
  {
    description: '2702312537',
    title: 'Phoenix, AZ',
    value: 'phoenix',
  },
];

const BulkSms = () => {
  const [chips, setChips] = useState([]);

  const [numberInput, setNumberInput] = useState('');
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState('houston');
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);
  const handleChipDelete = (chip) => {
    setChips((prevChips) => prevChips.filter((prevChip) => chip !== prevChip));
  };

  const handleSingleNumber = (e) => {
    e.preventDefault();
    setChips((prev) => [...prev, numberInput]);
    setNumberInput('1');
  };

  const handleMultiSelectChange = (value) => {
    setChips(value);
  };

  const notify = () => toast('Messages Sent.');

  const handleSubmitList = async () => {
    console.log({
      message,
      numberList: chips,
      location,
    });

    try {
      setLoading(true);
      console.log(
        JSON.stringify({
          message,
          numberList: chips,
        })
      );
      setError(false);

      const responseSms = await fetch(
        'https://us-central1-finding-spaces-73b23.cloudfunctions.net/admin/sendBulkSms',
        {
          method: 'POST',
          mode: 'no-cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message,
            numberList: chips,
          }),
        }
      );

      console.log(responseSms);
      setChips([]);
      notify();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError('something went wrong');
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        minHeight: '100%',
        width: '100%',
        p: 3,
      }}
    >
      <Typography gutterBottom={false} display='inline'>
        Add a recipent
      </Typography>

      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          p: 2,
        }}
      >
        <Box
          onSubmit={(e) => {
            e.preventDefault();
            setChips((prev) => [...prev, numberInput]);
            setNumberInput('');
          }}
          component='form'
          sx={{
            flexGrow: 0,
          }}
        >
          <PhoneInput
            prefix='+'
            onEnterKeyPress={numberInput.length === 12 && handleSingleNumber}
            country='us'
            inputProps={{
              name: 'number',
              required: true,
              autoFocus: true,
              label: 'Add a recipent',
            }}
            value={numberInput}
            onChange={(phone) => setNumberInput(`+${phone}`)}
          />
          {/* <Input
            id='number'
            name='number'
            onChange={(e) => setNumberInput(e.target.value)}
            value={numberInput}
            disableUnderline
            fullWidth
            placeholder='Add a mobile number to recipient list'
          /> */}
        </Box>
        <Button
          disabled={numberInput.length !== 12}
          onClick={handleSingleNumber}
        >
          Enter
        </Button>
      </Box>

      <Divider />
      <Typography gutterBottom sx={{ display: 'block', pt: 2 }}>
        Recipents
      </Typography>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          p: 2,
          minHeight: '100px',
        }}
      >
        <br />
        {chips.length === 0 && (
          <Typography sx={{ color: '#808080' }} variant='overline'>
            No recipents
          </Typography>
        )}
        {chips.map((chip) => (
          <Chip
            key={chip}
            label={chip}
            onDelete={() => handleChipDelete(chip)}
            sx={{ m: 1 }}
            variant='outlined'
          />
        ))}
      </Box>
      <Divider />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          p: 2,
        }}
      >
        <Message fontSize='small' />
        <Box
          onSubmit={() => {
            // e.preventDefault();
            // setChips((prev) => [...prev, numberInput]);
            // setNumberInput('');
          }}
          sx={{
            flexGrow: 1,
            ml: 3,
          }}
        >
          <Input
            sx={{
              borderRadius: 1,
              borderStyle: 'solid',
              padding: 2,
              borderWidth: 1,
              borderColor: 'lightgrey',
            }}
            name='message'
            id='message'
            multiline
            minRows={3}
            onChange={(e) => setMessage(e.target.value)}
            disableUnderline
            fullWidth
            placeholder='Type Messages'
            value={message}
          />
        </Box>
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          p: 1,
        }}
      >
        {selectOptions.map((option) => (
          <MultiSelect
            key={option.label}
            label={option.label}
            onChange={handleMultiSelectChange}
            options={option.options}
            value={chips}
          />
        ))}
        <Box sx={{ flexGrow: 1 }} />
        {err && err}
        {loading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <Button
            disabled={chips.length === 0}
            onClick={handleSubmitList}
            variant='contained'
            label='In network'
          >
            Send
          </Button>
        )}
      </Box>
      <RadioGroup
        aria-label='gender'
        defaultValue='female'
        name='radio-buttons-group'
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        color='primary'
      >
        {typeOptions.map((typeOption) => (
          <Paper
            key={typeOption.value}
            sx={{
              alignItems: 'flex-start',
              display: 'flex',
              px: 2,
              m: 1,
              width: 'auto',
            }}
            variant='outlined'
          >
            <FormControlLabel
              control={<Radio />}
              key={typeOption.value}
              label={
                <Box sx={{ ml: 2 }}>
                  <Typography color='textPrimary' variant='subtitle2'>
                    {typeOption.title}
                  </Typography>
                  <Typography color='textSecondary' variant='body2'>
                    {typeOption.description}
                  </Typography>
                </Box>
              }
              value={typeOption.value}
            />
          </Paper>
        ))}
      </RadioGroup>
    </Box>
  );
};

export default BulkSms;
