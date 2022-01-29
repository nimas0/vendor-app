import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  selectedPropertyId: null,
};

const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.selectedPropertyId = null;
    },
    selectProperty(state, action) {
      state.isModalOpen = true;
      state.selectedEventId = action.payload;
    },
  },
});

export const selectProperty = (propertyId) => async (dispatch) => {
  dispatch(slice.actions.selectEvent(propertyId));
};

export const openModal = () => (dispatch) => {
  dispatch(slice.actions.openModal());
};

export const closeModal = () => (dispatch) => {
  dispatch(slice.actions.closeModal());
};

export const { reducer } = slice;

export default slice;
