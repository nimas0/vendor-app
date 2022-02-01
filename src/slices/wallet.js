/* eslint-disable operator-linebreak */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { dispatch } from 'react-hot-toast';
// import objFromArray from '../utils/objFromArray';
// import { chatApi } from '../__fakeApi__/chatApi';
import firebase from '../lib/firebase';
import deepCopy from '../utils/deepCopy';
import axios from 'axios';

const amount = {
  prepare: 200,
  value: 400,
};

const walletAddress =
  'addr_test1vpev77fsxvu8r2xktae26n2x69fdheu7jgdvrq995kchezccca8ud';

const initialState = {
  address: walletAddress,
  nfts: [],
  spaceTokens: 0,
  status: null,
  data: {},
};

export const getBalance = createAsyncThunk('users/getBalance', async () => {
  const response = await axios.get(
    'https://www.wolframcloud.com/obj/christianp/MyProjects/FindingSpaces/API/v1/wallet?address=addr_test1qzpr2w3dt0y5m6mvnp42rhszc0ra80hth675329n0mvqj29ee6g6hdpct9pegent6m020jcuhj6sl34s7nhs36z5vl0qqnmzny'
  );
  return response.data.Data;
});

const slice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    mint(state, action) {
      // add new nft to database
      // push new nft id to state
    },
    getNft(state, action) {
      // take NFT id and look up
    },
    setSpaceTokenAmount(state, action) {
      // retrieve wallet balance
    },
  },
  extraReducers: {
    [getBalance.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getBalance.fulfilled]: (state, action) => {
      state.status = 'success';
      console.log(action);
      state.data = action.payload;
    },
    [getBalance.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { reducer } = slice;

export const mint = (propertyId) => (dispatch) => {
  dispatch(slice.actions.openModal({ propertyId }));
};

export default slice;
