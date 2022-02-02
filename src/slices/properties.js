import { createSlice } from '@reduxjs/toolkit';
import { propertyApi } from '../__fakeApi__/listingApi';

const initialState = {
  isModalOpen: false,
  isLoaded: false,
  selectedPropertyId: null,
  properties: [],
  tour: true,
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
      state.tour = false;
    },
  },
});

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

export const closeTour = () => (dispatch) => {
  dispatch(slice.actions.closeTour());
};

export const { reducer } = slice;

export default slice;
