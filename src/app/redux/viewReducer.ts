import { createSlice } from '@reduxjs/toolkit';

export enum ListTypes {
  Panel = 'panel',
  Grid = 'grid',
}

type ViewState = {
  list: ListTypes
}

const initialState: ViewState = {
  list: ListTypes.Grid,
};

export const modalSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    switchView: (state) => {
      state.list = state.list === ListTypes.Panel ? ListTypes.Grid : ListTypes.Panel;
    },
  },
});

export const { switchView } = modalSlice.actions;

export default modalSlice.reducer;
