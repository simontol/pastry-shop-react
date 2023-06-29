import { createSlice } from '@reduxjs/toolkit';

type ViewState = {
  list: string
}

const initialState: ViewState = {
  list: 'panel',
};

export const modalSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    switchView: (state) => {
      if (state.list === 'panel') {
        state.list = 'grid';
      } else {
        state.list = 'panel';
      }
    },
  },
});

export const { switchView } = modalSlice.actions;

export default modalSlice.reducer;
