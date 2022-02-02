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
import { useDispatch, useSelector } from 'react-redux';
import {
  markAsCompleted,
  closeModal,
  toggleLoading,
} from '../../../slices/tasks';
import { useEffect, useState } from 'react';
import LoadingTask from '../../property/LoadingTask';
import { spendTokens } from '../../../slices/wallet';

const TaskModal = ({
  onClose,
  open,
  tasks,
  activeTask,
  setLoading,
  ...other
}) => {
  const task = tasks.tasks.filter((t) => t.id === activeTask);
  console.log('selected Task', task);
  const dispatch = useDispatch();
  const handleSubmit = async (id) => {
    setTimeout(() => dispatch(toggleLoading(tasks.propertyId)), 5000);
    dispatch(markAsCompleted(id));
    dispatch(toggleLoading(tasks.propertyId));
    setTimeout(() => dispatch(closeModal(tasks.propertyId)), 5000);
    setTimeout(() => dispatch(spendTokens()), 5200);
  };

  return (
    <Dialog maxWidth="lg" onClose={onClose} open={open} {...other}>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          p: 3,
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={0}
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
              {!tasks.loading ? <CheckIcon /> : <CircularProgress />}
            </Avatar>

            <Typography color="textPrimary" variant="h5">
              {task.length > 0 ? task[0].label : ''}
            </Typography>

            {tasks.loading ? (
              <LoadingTask />
            ) : (
              <Typography
                align="center"
                color="textSecondary"
                sx={{ mt: 1 }}
                variant="body2"
              >
                Simulate ordering third party services with
                findingSpaces easy 1 click solution
              </Typography>
            )}

            {task.length > 0 && task[0].id === 'closeHome' ? (
              <Button
                target="_blank"
                href="https://spatialweb.net/@findingspaces"
                onClick={() => handleSubmit(tasks.propertyId)}
                key={tasks.count}
                disabled={tasks.loading}
                color="primary"
                fullWidth
                size="large"
                sx={{ mt: 4 }}
                variant="contained"
              >
                {task.length > 0 ? task[0].actionLabel : ''}
              </Button>
            ) : (
              <Button
                key={tasks.count}
                onClick={() => handleSubmit(tasks.propertyId)}
                disabled={tasks.loading}
                color="primary"
                fullWidth
                size="large"
                sx={{ mt: 4 }}
                variant="contained"
              >
                {task.length > 0 ? task[0].actionLabel : ''}
              </Button>
            )}
          </Paper>
        </Container>
      </Box>
    </Dialog>
  );
};

export default TaskModal;
