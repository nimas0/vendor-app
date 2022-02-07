/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
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
import { useState } from 'react';

const iconsMap = {
  invite: SendIcon,
  message: MailIcon,
  payout: CreditCardIcon,
  task: Add,
};

const GroupedList4 = ({
  tasks,
  handleTaskModalOpen,
  handleClose,
}) => {
  console.log('tasks!!!', tasks);
  const [loading, setLoading] = useState(false);
  return (
    <Box
      id="taskbar"
      sx={{
        backgroundColor: 'transparent',
      }}
    >
      <Card sx={{ mt: 0 }} elevation={0}>
        <CardHeader
          sx={{ mt: 0, pt: 0 }}
          title={`Tasks Completed: ${tasks.count} out 5`}
          subheader="Complete these tasks to simulate selling a home"
        />
        <List dense>
          {tasks.tasks.map((task, i) => {
            const Icon = iconsMap.task;
            console.log('listmap', tasks.propertyId);
            return (
              <ListItem
                onClick={() =>
                  handleTaskModalOpen(tasks.propertyId, task.id)
                }
                button
                id={task.id}
                divider={i < tasks.length - 1}
                key={task.id}
              >
                <ListItemIcon>
                  <Icon fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    color={task.completed ? 'primary' : 'textPrimary'}
                    variant="subtitle2"
                  >
                    {` ${task.label}`}
                  </Typography>
                </ListItemText>
                <ListItemSecondaryAction>
                  <Tooltip title="View">
                    <IconButton edge="end">
                      {task.completed ? (
                        <Check color="primary" />
                      ) : (
                        <ChevronRightIcon fontSize="small" />
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
        key={loading}
        loading={loading}
        setLoading={setLoading}
        tasks={tasks}
        activeTask={tasks.selectedTask}
        open={tasks.isModalOpen}
        onClose={() => handleClose(tasks.propertyId)}
      />
    </Box>
  );
};

export default GroupedList4;
