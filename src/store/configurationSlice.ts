import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IConfiguration } from '../types/configurationTypes';

const initialState: IConfiguration = {
  modalConfiguration: { showModal: false, currentUserId: '' }
};

const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    ToggleModal(state, action: PayloadAction<IConfiguration>) {
      state.modalConfiguration.showModal = action.payload.modalConfiguration.showModal;
      if (action.payload.modalConfiguration.currentUserId !== '')
        state.modalConfiguration.currentUserId = action.payload.modalConfiguration.currentUserId;
    }
  }
});

const { actions } = configurationSlice;
export const { ToggleModal } = actions;
export default configurationSlice;
