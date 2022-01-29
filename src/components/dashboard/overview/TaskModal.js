/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  Paper,
  Typography,
} from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import CheckIcon from '../../../icons/Check';
import { useDispatch } from 'react-redux';
import { markAsCompleted, closeModal } from '../../../slices/tasks';
import { useState } from 'react';

const TaskModal = ({ onClose, open, tasks, activeTask, ...other }) => {
  const task = tasks.tasks.filter((t) => t.id === activeTask);
  const [loading, setLoading] = useState(false);
  console.log('selected Task', task);
  const dispatch = useDispatch();
  const handleSubmit = async (id) => {
    setLoading(true);
    dispatch(markAsCompleted(id));
    dispatch(closeModal());
    setLoading(false);
  };

  return (
    <Dialog maxWidth='lg' onClose={onClose} open={open} {...other}>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          p: 3,
        }}
      >
        <Container maxWidth='sm'>
          <Paper
            elevation={12}
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                backgroundColor: (theme) =>
                  alpha(theme.palette.success.main, 0.08),
                color: 'success.main',
                mb: 2,
              }}
            >
              <CheckIcon />
            </Avatar>
            {loading && (
              <>
                <CircularProgress key={loading} />
                <Typography>Generating Action</Typography>
              </>
            )}

            <Typography color='textPrimary' variant='h5'>
              {task.length > 0 ? task[0].label : ''}
            </Typography>
            <Typography
              align='center'
              color='textSecondary'
              sx={{ mt: 1 }}
              variant='body2'
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident facere eum obcaecati pariatur magnam eius fugit nostrum
              sint enim, amet rem aspernatur distinctio tempora repudiandae,
              maiores quod. Ad, expedita assumenda!
            </Typography>
            <Button
              key={tasks.count}
              onClick={() => handleSubmit(activeTask)}
              disabled={loading}
              color='primary'
              fullWidth
              size='large'
              sx={{ mt: 4 }}
              variant='contained'
            >
              {task.length > 0 ? task[0].actionLabel : ''}
            </Button>
          </Paper>
        </Container>
      </Box>
    </Dialog>
  );
};

export default TaskModal;
