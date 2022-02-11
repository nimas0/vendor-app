/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-assignment */
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

const initialState = {
  address: '',
  nfts: [],
  spaceTokens: 500,
  status: null,
  data: {},
};

export const getBalance = createAsyncThunk(
  'users/getBalance',
  async (walletAddress) => {
    console.log(walletAddress);
    const response = await axios.get(
      `https://www.wolframcloud.com/obj/christianp/MyProjects/FindingSpaces/API/v1/wallet?address=${walletAddress}`,
    );
    return response.data.Data;
  },
);

export const getNft = createAsyncThunk('users/nft', async () => {
  const response = await axios.get(
    'https://www.wolframcloud.com/obj/christianp/MyProjects/FindingSpaces/API/v1/nft?nftid=FS1643812270',
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
    spendRealTokens(state, action) {
      state.spend = action.payload;
    },
    spendTokens(state) {
      state.data.balanceSPACE = state.data.balanceSPACE - 50;
    },
  },
  extraReducers: {
    [getBalance.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getBalance.fulfilled]: (state, action) => {
      state.status = 'success';
      state.data = action.payload;
    },
    [getBalance.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [getNft.pending]: (state, action) => {
      state.status2 = 'loading';
    },
    [getNft.fulfilled]: (state, action) => {
      state.status2 = 'success';
      state.nft = action.payload;
    },
    [getNft.rejected]: (state, action) => {
      state.status2 = 'failed';
    },
  },
});

export const { reducer } = slice;

export const spendTokens = () => (dispatch) => {
  dispatch(slice.actions.spendTokens());
};

export const mint = createAsyncThunk(
  'users/mint',
  async (dispatch, getState) => {
    const response = await axios.get(
      'https://www.wolframcloud.com/obj/christianp/MyProjects/FindingSpaces/API/v1/wallet?address=addr_test1qzpr2w3dt0y5m6mvnp42rhszc0ra80hth675329n0mvqj29ee6g6hdpct9pegent6m020jcuhj6sl34s7nhs36z5vl0qqnmzny',
    );
    return response.data.Data;
  },
);

export const spendRealTokens =
  (walletAddress) => async (dispatch) => {
    const request = firebase
      .functions()
      .httpsCallable('spendRealTokens');
    try {
      request({ walletAddress }).then((results) => {
        console.log('results from functions', results);
      });
    } catch (error) {
      console.log('fuck', error);
    }
  };

export const transferNFT =
  (walletAddress, nftId) => async (dispatch) => {
    const request = firebase.functions().httpsCallable('sendNFT');
    try {
      request({ walletAddress, nftId }).catch((error) =>
        console.log(error),
      );
    } catch (error) {
      console.log('sdf', error);
    }
  };

export default slice;
