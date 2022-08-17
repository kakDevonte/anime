import { createAsyncThunk } from '@reduxjs/toolkit';
import { animeAPI } from '../../api/api';
import { AnimesState } from './types';

export const getAnimes = createAsyncThunk<AnimesState, number>(
  'anime/getAnimes',
  async (page) => {
    const { data } = await animeAPI.getAnimes(page);
    return data;
  }
);
