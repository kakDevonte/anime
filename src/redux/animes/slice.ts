import { createSlice } from '@reduxjs/toolkit';
import { AnimesState } from './types';
import { getAnimes } from './asyncActions';
import { act } from 'react-dom/test-utils';

const initialState: AnimesState = {
  pagination: null,
  data: [],
  status: 'success',
};

const animesSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAnimes.fulfilled, (state, action) => {
      state.status = 'success';
      state.pagination = action.payload.pagination;
      state.data = state.data.concat(action.payload.data);
    });
    builder.addCase(getAnimes.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getAnimes.rejected, (state) => {
      state.status = 'error';
    });
  },
});

export default animesSlice.reducer;
