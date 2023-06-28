import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ModalState } from "./types";

const initialState: ModalState = {
  show: '',
  product: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<ModalState>) => {
      state.show = action.payload.show;
      state.product = action.payload.product;
    },
    hideModal: (state) => {
      state.show = '';
      state.product = null;
    },
  },
})

export const { showModal, hideModal } = modalSlice.actions

export default modalSlice.reducer
