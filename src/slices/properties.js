import { createSlice } from '@reduxjs/toolkit';
import { propertyApi } from '../__fakeApi__/listingApi';
import firebase from 'firebase';

const db = firebase.firestore();

const initialState = {
  isModalOpen: false,
  isLoaded: false,
  selectedPropertyId: null,
  properties: [],
  tourCompleted: true,
  steps: [
    {
      selector: '#body',
      content: 'Welcome to Finding Spaces',
    },
    {
      selector: '#homeview',
      content: 'To begin simulation, click on a home and claim it. ',
    },
    // ...
  ],
};

const slice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    getProperties(state, action) {
      state.properties = action.payload;
    },
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.selectedPropertyId = null;
    },
    selectProperty(state, action) {
      state.isModalOpen = true;
      state.selectedPropertyId = action.payload;
    },
    resetSelect(state) {
      state.selectedTask = null;
    },
    closeTour(state) {
      state.tourCompleted = true;
    },
    initializeTour(state, action) {
      state.tourCompleted = action.payload.tourCompleted;
    },
  },
});

export const initializeTour = (uid) => async (dispatch) => {
  const userReference = db.collection('users').doc(uid);

  try {
    const snapshot = await userReference.get();
    console.log('initializeTour', snapshot.exists);

    if (snapshot.exists) {
      // get tour status and set
      const data = snapshot.data();
      if (typeof data.tourCompleted === 'boolean') {
        dispatch(
          slice.actions.initializeTour({
            tourCompleted: data.tourCompleted,
          }),
        );
      } else {
        await userReference.set(
          {
            marketplaceTourCompleted: false,
          },
          { merge: true },
        );
        dispatch(
          slice.actions.initializeTour({ tourCompleted: true }),
        );
      }
    } else {
      // set tour
      await userReference.set(
        {
          tourCompleted: false,
        },
        { merge: true },
      );
      dispatch(slice.actions.initializeTour({ tourCompleted: true }));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProperties = () => async (dispatch) => {
  const data = await propertyApi.getProperties();
  dispatch(slice.actions.getProperties(data));
};

export const selectProperty = (propertyId) => async (dispatch) => {
  dispatch(slice.actions.selectProperty(propertyId));
};

export const openModal = () => (dispatch) => {
  dispatch(slice.actions.openModal());
};

export const closeModal = () => (dispatch) => {
  dispatch(slice.actions.closeModal());
};

export const resetSelect = () => (dispatch) => {
  dispatch(slice.actions.resetSelect());
};

export const postClaim = () => () => {
  const request = firebase.functions().httpsCallable('processClaim');
  request({}).then((results) => {
    console.log('results from functions', results);
  });
};

export const closeTour = (uid) => async (dispatch) => {
  const userReference = db.collection('users').doc(uid);
  dispatch(slice.actions.closeTour());
  await userReference.set(
    {
      tourCompleted: true,
    },
    { merge: true },
  );
};

export const { reducer } = slice;

export default slice;
