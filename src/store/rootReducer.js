import { combineReducers } from '@reduxjs/toolkit';
import { reducer as calendarReducer } from '../slices/calendar';
import { reducer as chatReducer } from '../slices/chat';
import { reducer as kanbanReducer } from '../slices/kanban';
import { reducer as mailReducer } from '../slices/mail';
import { reducer as taskReducer } from '../slices/tasks';
import { reducer as propertiesReducer } from '../slices/properties';
import { reducer as walletReducer } from '../slices/wallet';

const rootReducer = combineReducers({
  calendar: calendarReducer,
  chat: chatReducer,
  kanban: kanbanReducer,
  mail: mailReducer,
  tasks: taskReducer,
  properties: propertiesReducer,
  wallet: walletReducer,
});

export default rootReducer;
