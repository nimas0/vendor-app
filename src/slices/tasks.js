/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
// import objFromArray from '../utils/objFromArray';
// import { chatApi } from '../__fakeApi__/chatApi';
import firebase from '../lib/firebase';
import deepCopy from '../utils/deepCopy';

const amount = {
  prepare: 200,
  value: 400,
};

const walletAddress =
  'addr_test1vpev77fsxvu8r2xktae26n2x69fdheu7jgdvrq995kchezccca8ud';

const data = {
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
  loading: false,
  propertyId: null,
};

const initialState = [];

const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    openModal(state, action) {
      const { propertyId } = action.payload;
      console.log('opnmodal', action.payload);
      const index = state.findIndex((item) => item.propertyId === propertyId);
      state[index].isModalOpen = true;
    },
    closeModal(state, action) {
      const { propertyId } = action.payload;
      console.log('closemodal', action.payload);
      const index = state.findIndex((item) => item.propertyId === propertyId);
      state[index].isModalOpen = false;
      state[index].selectedTask = null;
    },
    markAsCompleted(state, action) {
      const { propertyId } = action.payload;
      console.log('markasCompleted', action.payload);
      const index = state.findIndex((task) => task.propertyId === propertyId);
      console.log('prepare', state[index].selectedTask);

      const selectedIndex = state[index].tasks.findIndex(
        (task) => task.id === state[index].selectedTask
      );
      console.log('selctedcomplete', selectedIndex);
      state[index].tasks[selectedIndex].completed = true;
      state[index].count += 1;
    },
    selectTask(state, action) {
      console.log('selectTask', action.payload);
      const { taskId, propertyId } = action.payload;
      const index = state.findIndex((item) => item.propertyId === propertyId);
      console.log('selectTaskIndex', index, state[index].selectedTask);
      state[index].selectedTask = taskId;
    },
    resetTask(state, action) {
      const { propertyId } = action.payload;
      const index = state.findIndex((item) => item.propertyId === propertyId);

      state[index].selectedTask = null;
    },
    getClaimed(state, action) {
      console.log('getclaimed', action.payload, state);
      state.push(...action.payload);
    },
    claimHome(state, action) {
      // state.push(action.payload);
    },
    closeTour(state) {
      state.tour = false;
    },
    setLoading(state, action) {
      const { propertyId } = action.payload;
      const index = state.findIndex((item) => item.propertyId === propertyId);
      state[index].loading = !state[index].loading;
    },
  },
});

export const { reducer } = slice;

export const openModal = (propertyId) => (dispatch) => {
  dispatch(slice.actions.openModal({ propertyId }));
};

export const toggleLoading = (propertyId) => (dispatch) => {
  dispatch(slice.actions.setLoading({ propertyId }));
};

export const closeModal = (propertyId) => (dispatch) => {
  setTimeout(() => console.log('hello'), 3000);
  dispatch(slice.actions.closeModal({ propertyId }));
};

export const markAsCompleted = (propertyId) => async (dispatch) => {
  dispatch(slice.actions.markAsCompleted({ propertyId }));
};

export const selectTask = (propertyId, taskId) => (dispatch) => {
  dispatch(slice.actions.selectTask({ propertyId, taskId }));
};

export const resetTask = (propertyId) => (dispatch) => {
  dispatch(slice.actions.resetTask({ propertyId }));
};

export const getClaimed = (uid) => async (dispatch) => {
  try {
    const finalState = [];

    console.log('uid', uid);
    const docRef = firebase.firestore().collection('claims').doc(uid);
    const snapshot = await docRef.get();
    const claims = snapshot.data();

    console.log('array', claims);

    Object.values(claims).forEach((claim) => {
      console.log('claimobj', claim);
      const claimedState = deepCopy(data);
      claimedState.propertyId = claim;
      finalState.push(claimedState);
    });

    console.log('claimedState', finalState);
    dispatch(slice.actions.getClaimed(finalState));
  } catch (error) {
    console.log(error);
  }
};

export const closeTour = () => (dispatch) => {
  dispatch(slice.actions.closeTour());
};

export const claimHome = (id, uid) => async (dispatch) => {
  try {
    await firebase.firestore().collection('claims').doc(uid).set({
      propertyId: id,
    });

    const claimedState = deepCopy(data);
    claimedState.propertyId = id;
    dispatch(slice.actions.claimHome(claimedState));
  } catch (error) {
    console.error('Error writing document: ', error);
  }
};

export default slice;
