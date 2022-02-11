/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import objFromArray from '../utils/objFromArray';
// import { chatApi } from '../__fakeApi__/chatApi';
import firebase from '../lib/firebase';
import deepCopy from '../utils/deepCopy';

const amount = {
  prepare: 200,
  value: 400,
};

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
  loading: true,
  propertyId: null,
  propertyData: null,
};

const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    openModal(state, action) {
      // const { propertyId } = action.payload;
      // console.log('opnmodal', action.payload);
      // const index = state.findIndex(
      //   (item) => item.propertyId === propertyId,
      // );
      state.isModalOpen = true;
    },
    closeModal(state, action) {
      state.isModalOpen = false;
      state.selectedTask = null;
    },
    markAsCompleted(state, action) {
      const id = action.payload;
      console.log('id', id);
      const index = state.tasks.findIndex((task) => task.id === id);
      state.tasks[index].completed = true;
      state.count += 1;
    },
    selectTask(state, action) {
      // console.log('selectTask', action.payload);
      const { taskId } = action.payload;
      // const index = state.findIndex(
      //   (item) => item.propertyId === propertyId,
      // );
      // console.log(
      //   'selectTaskIndex',
      //   index,
      //   state[index].selectedTask,
      // );
      state.selectedTask = taskId;
    },
    resetTask(state, action) {
      state.selectedTask = null;
    },
    getClaimed(state, action) {
      console.log('getclaimed', action.payload);
      state.propertyData = action.payload;
    },
    claimHome(state, action) {
      console.log('claimHome', action.payload);
      state.propertyData = action.payload;
    },
    closeTour(state) {
      state.tour = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { reducer } = slice;

export const openModal = (propertyId) => (dispatch) => {
  dispatch(slice.actions.openModal({ propertyId }));
};

export const setLoading = (bool) => (dispatch) => {
  dispatch(slice.actions.setLoading(bool));
};

export const closeModal = (propertyId) => (dispatch) => {
  setTimeout(() => console.log('hello'), 3000);
  dispatch(slice.actions.closeModal({ propertyId }));
};

export const markAsCompleted = (id) => (dispatch) => {
  dispatch(slice.actions.markAsCompleted(id));
};

export const selectTask = (taskId) => (dispatch) => {
  console.log('tasalksjdflkasjdflkasjdf', taskId);
  dispatch(slice.actions.selectTask({ taskId }));
};

export const resetTask = () => (dispatch) => {
  dispatch(slice.actions.resetTask());
};

export const getClaimed = (uid) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const docRef = firebase.firestore().collection('claims').doc(uid);
    const snapshot = await docRef.get();
    const claim = snapshot.data();

    console.log('array', claim);
    dispatch(slice.actions.getClaimed({ ...claim }));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
  }
};

export const closeTour = () => (dispatch) => {
  dispatch(slice.actions.closeTour());
};

export const claimHome =
  (id, walletAddress, navigate) => async (dispatch, getState) => {
    const request = firebase
      .functions()
      .httpsCallable('processClaim');
    const { properties } = getState();
    const propertyData = properties.properties.filter(
      (item) => item.id === id,
    );
    console.log('propertyData', propertyData[0]);
    try {
      dispatch(setLoading(true));
      request({ propertyData: propertyData[0], walletAddress }).then(
        (results) => {
          console.log('results from functions', results);
          dispatch(slice.actions.claimHome(results.data));
          dispatch(setLoading(false));
          navigate('/dashboard');
        },
      );

      // await firebase.firestore().collection('claims').doc(uid).set({
      //   propertyId: id,
      // });
      // const claimedState = deepCopy(data);
      // claimedState.propertyId = id;
      // dispatch(slice.actions.claimHome(claimedState));
    } catch (error) {
      console.error('Error writing document: ', error);
    }
  };

export default slice;
