import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ModalState } from "./types";

type ModalAction = {
  show: string;
  data: any;
}

const initialState: ModalState = {
  show: '',
  data: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<ModalAction>) => {
      state.show = action.payload.show;
      state.data = action.payload.data;
    },
    hideModal: (state) => {
      state.show = '';
      state.data = null;
    },
  },
})

export const { showModal, hideModal } = modalSlice.actions

export default modalSlice.reducer
