import axios from "axios";
import { loadUserFailure, loadUserRequest, loadUserSuccess, loginFailure, loginRequest, loginSuccess, logoutFailure, logoutRequest, logoutSuccess, registerFailure, registerRequest, registerSuccess, verificationFailure, verificationRequest, verificationSuccess } from "./authSlice";
import { addTaskFailure, addTaskRequest, addTaskSuccess, deleteTaskFailure, deleteTaskRequest, deleteTaskSuccess, forgetPasswordFailure, forgetPasswordRequest, forgetPasswordSuccess, resetPasswordFailure, resetPasswordRequest, resetPasswordSuccess, updatePasswordFailure, updatePasswordRequest, updatePasswordSuccess, updateProfileFailure, updateProfileRequest, updateProfileSuccess, updateTaskFailure, updateTaskRequest, updateTaskSuccess } from "./messageSlice";
// type ipconfig on cmd copy ip address ->192.168.188.42 and loaclhost replaced by ip address
const serverUrl = "https://app-server-nofo.onrender.com/api/v1";


export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: loginRequest.type });

    const { data } = await axios.post(
      `${serverUrl}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: loginSuccess.type, payload: data });
    
  } catch (error) {
    dispatch({ type: loginFailure.type, payload: error.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: loadUserRequest.type });

    const { data } = await axios.get(`${serverUrl}/me`);
    dispatch({ type: loadUserSuccess.type, payload: data });
  } catch (error) {
    dispatch({ type: loadUserFailure.type, payload: error.response.data.message });
  }
};

export const addTask = (title, description) => async (dispatch) => {
  try {
    dispatch({ type: addTaskRequest.type });

    const { data } = await axios.post(
      `${serverUrl}/newtask`,
      {
        title,
        description,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: addTaskSuccess.type, payload: data.message });
  } catch (error) {
    dispatch({ type: addTaskFailure.type, payload: error.response.data.message });
  }
};

export const updateTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: updateTaskRequest.type });

    const { data } = await axios.get(`${serverUrl}/task/${taskId}`);
    dispatch({ type: updateTaskSuccess.type, payload: data.message });
  } catch (error) {
    dispatch({
      type: updateTaskFailure.type,
      payload: error.response.data.message,
    });
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: deleteTaskRequest.type });

    const { data } = await axios.delete(`${serverUrl}/task/${taskId}`);
    dispatch({ type: deleteTaskSuccess.type, payload: data.message });
  } catch (error) {
    dispatch({
      type: deleteTaskFailure.type,
      payload: error.response.data.message,
    });
  }
};

export const updateProfile = (formData) => async (dispatch) => {
  try {
    // console.log(formData._parts);
    dispatch({ type: updateProfileRequest.type });
    
    
    const { data } = await axios.put(`${serverUrl}/updateprofile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: updateProfileSuccess.type, payload: data.message });
  } catch (error) {
    dispatch({
      type: updateProfileFailure.type,
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: logoutRequest.type });

    await axios.get(`${serverUrl}/logout`);
    dispatch({ type: logoutSuccess.type });
  } catch (error) {
    dispatch({
      type: logoutFailure.type,
      payload: error.response.data.message,
    });
  }
};

export const register = (formData) => async (dispatch) => {
  try {
    dispatch({ type: registerRequest.type });

    const { data } = await axios.post(`${serverUrl}/register`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: registerSuccess.type, payload: data });
  } catch (error) {
    dispatch({
      type: registerFailure.type,
      payload: error.response.data.message,
    });
  }
};

export const updatePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({ type: updatePasswordRequest.type });

      const { data } = await axios.put(
        `${serverUrl}/updatepassword`,
        { oldPassword, newPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({ type: updatePasswordSuccess.type, payload: data.message });
    } catch (error) {
      dispatch({
        type: updatePasswordFailure.type,
        payload: error.response.data.message,
      });
    }
  };

export const verify = (otp) => async (dispatch) => {
  try {
    dispatch({ type: verificationRequest.type });

    const { data } = await axios.post(
      `${serverUrl}/verify`,
      { otp },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: verificationSuccess.type, payload: data.message });
  } catch (error) {
    dispatch({
      type: verificationFailure.type,
      payload: error.response.data.message,
    });
  }
};

export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: forgetPasswordRequest.type });

    const { data } = await axios.post(
      `${serverUrl}/forgetpassword`,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: forgetPasswordSuccess.type, payload: data.message });
  } catch (error) {
    dispatch({
      type:forgetPasswordFailure.type,
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (otp, newPassword) => async (dispatch) => {
  try {
    dispatch({ type: resetPasswordRequest.type });

    const { data } = await axios.put(
      `${serverUrl}/resetpassword`,
      { otp, newPassword },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: resetPasswordSuccess.type, payload: data.message });
  } catch (error) {
    dispatch({
      type: resetPasswordFailure.type,
      payload: error.response.data.message,
    });
  }
};