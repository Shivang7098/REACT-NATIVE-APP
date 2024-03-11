// secondSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Define initial state properties here for the second slice
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
   
    addTaskRequest: (state) => {
        state.loading = true;
      },
      addTaskSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      addTaskFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
      updateTaskRequest: (state) => {
        state.loading = true;
      },
      updateTaskSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      updateTaskFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
      deleteTaskRequest: (state) => {
        state.loading = true;
      },
      deleteTaskSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      deleteTaskFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
      updateProfileRequest: (state) => {
        state.loading = true;
      },
      updateProfileSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      updateProfileFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
      updatePasswordRequest: (state) => {
        state.loading = true;
      },
      updatePasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      updatePasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
      forgetPasswordRequest: (state) => {
        state.loading = true;
      },
      forgetPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      forgetPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
      resetPasswordRequest: (state) => {
        state.loading = true;
      },
      resetPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      resetPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
      clearError: (state) => {
        state.error = null;
      },
  
      clearMessage: (state) => {
        state.message = null;
      },
    // Define other action creators if needed for the second slice
  },
});

export const { addTaskRequest,addTaskSuccess, addTaskFailure,updateTaskRequest,updateTaskSuccess, updateTaskFailure, deleteTaskRequest, deleteTaskSuccess, deleteTaskFailure, updatePasswordRequest, updatePasswordSuccess, updateProfileFailure, updateProfileRequest, updateProfileSuccess, forgetPasswordFailure, forgetPasswordRequest, forgetPasswordSuccess, resetPasswordRequest, resetPasswordSuccess, resetPasswordFailure, clearError, clearMessage , updatePasswordFailure} = messageSlice.actions;

export default messageSlice.reducer;
