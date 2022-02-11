/* eslint-disable react/no-unescaped-entities */
import { createSlice } from '@reduxjs/toolkit';
import { propertyApi } from '../__fakeApi__/listingApi';
import firebase from 'firebase';
import WelcomeTour from '../components/property/WelcomeTour';

// const db = firebase.firestore();

const initialState = {
  isModalOpen: false,
  isLoaded: false,
  selectedPropertyId: null,
  properties: [],
  tour: false,
  steps: [
    {
      selector: '#body',
      content: (
        <>
          <WelcomeTour />
        </>
      ),
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
      state.tour = false;
    },
    openTour(state) {
      state.tour = true;
    },
    // initializeTour(state, action) {
    //   state.tour = action.payload.tour;
    // },
  },
});

// export const initializeTour = (uid) => async (dispatch) => {
//   const userReference = db.collection('users').doc(uid);

//   try {
//     const snapshot = await userReference.get();
//     console.log('initializeTour', snapshot.exists);

//     if (snapshot.exists) {
//       // get tour status and set
//       const data = snapshot.data();
//       if (typeof data.tour === 'boolean') {
//         dispatch(
//           slice.actions.initializeTour({
//             tour: data.tour,
//           }),
//         );
//       } else {
//         await userReference.set(
//           {
//             marketplacetour: false,
//           },
//           { merge: true },
//         );
//         dispatch(
//           slice.actions.initializeTour({ tour: true }),
//         );
//       }
//     } else {
//       // set tour
//       await userReference.set(
//         {
//           tour: false,
//         },
//         { merge: true },
//       );
//       dispatch(slice.actions.initializeTour({ tour: true }));
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

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

export const openTour = () => async (dispatch) => {
  // const userReference = db.collection('users').doc(uid);
  dispatch(slice.actions.openTour());
  // await userReference.set(
  //   {
  //     tour: true,
  //   },
  //   { merge: true },
  // );
};

export const closeTour = () => async (dispatch) => {
  // const userReference = db.collection('users').doc(uid);
  dispatch(slice.actions.closeTour());
  // await userReference.set(
  //   {
  //     tour: true,
  //   },
  //   { merge: true },
  // );
};

export const { reducer } = slice;

export default slice;
