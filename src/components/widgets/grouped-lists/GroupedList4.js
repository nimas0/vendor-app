/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
  Typography,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import CreditCardIcon from '../../../icons/CreditCard';
import MailIcon from '../../../icons/Mail';
import ChevronRightIcon from '../../../icons/ChevronRight';
import { Add } from '@material-ui/icons';
import Modal9 from '../modals/Modal9';
import TaskModal from '../../dashboard/overview/TaskModal';
import Check from '../../../icons/Check';

const iconsMap = {
  invite: SendIcon,
  message: MailIcon,
  payout: CreditCardIcon,
  task: Add,
};

const GroupedList4 = ({ tasks, handleTaskModalOpen, handleClose }) => (
  <Box
    sx={{
      backgroundColor: 'transparent',
      p: 6,
    }}
  >
    <Card elevation={0}>
      <CardHeader
        title={`Tasks Completed: ${tasks.count} out 5`}
        subheader='Complete these tasks to simulate selling a home'
      />
      <List>
        {tasks.tasks.map((task, i) => {
          const Icon = iconsMap.task;

          return (
            <ListItem
              onClick={() => handleTaskModalOpen(task.id)}
              button
              id={task.id}
              divider={i < tasks.length - 1}
              key={task.id}
            >
              <ListItemIcon>
                <Icon fontSize='small' />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  color={task.completed ? 'primary' : 'textPrimary'}
                  variant='subtitle2'
                >
                  {` ${task.label}`}
                </Typography>
              </ListItemText>
              <ListItemSecondaryAction>
                <Tooltip title='View'>
                  <IconButton edge='end'>
                    {task.completed ? (
                      <Check color='primary' />
                    ) : (
                      <ChevronRightIcon fontSize='small' />
                    )}
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Card>
    <TaskModal
      tasks={tasks}
      activeTask={tasks.selectedTask}
      open={tasks.isModalOpen}
      onClose={handleClose}
    />
  </Box>
);

export default GroupedList4;
