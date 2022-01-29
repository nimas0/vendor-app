import { createSlice } from '@reduxjs/toolkit';
// import objFromArray from '../utils/objFromArray';
// import { chatApi } from '../__fakeApi__/chatApi';

const initialState = {
  tasks: [
    {
      label: 'Prepare Your Home For Sale',
      completed: false,
      id: 'prepare',
      actionLabel: 'Order Photography',
    },
    {
      label: "Determine Home's Value",
      completed: false,
      id: 'value',
      actionLabel: 'Order Appraisal',
    },
    {
      label: 'Find Buyers',
      completed: false,
      id: 'findBuyer',
      actionLabel: 'Click to Search for Buyers',
    },
    {
      label: 'Negotiate Offers',
      completed: false,
      id: 'offers',
      actionLabel: 'Which offer do you like?',
    },
    {
      label: 'Close Home',
      completed: false,
      id: 'closeHome',
      actionLabel: 'Enter Virtual Closing Room',
    },
  ],
  selectedTask: null,
  isModalOpen: false,
  count: 0,
};

const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.selectedTask = null;
    },
    markAsCompleted(state, action) {
      const id = action.payload;
      const index = state.tasks.findIndex((task) => task.id === id);
      state.tasks[index].completed = true;
      state.count += 1;
    },
    selectTask(state, action) {
      const id = action.payload;
      state.selectedTask = id;
    },
    resetTask(state) {
      state.selectedTask = null;
    },
  },
});

export const { reducer } = slice;

export const openModal = () => (dispatch) => {
  dispatch(slice.actions.openModal());
};

export const closeModal = () => (dispatch) => {
  dispatch(slice.actions.closeModal());
};

export const markAsCompleted = (id) => (dispatch) => {
  dispatch(slice.actions.markAsCompleted(id));
};

export const selectTask = (id) => (dispatch) => {
  dispatch(slice.actions.selectTask(id));
};

export const resetTask = () => (dispatch) => {
  dispatch(slice.actions.resetTask());
};

export default slice;
