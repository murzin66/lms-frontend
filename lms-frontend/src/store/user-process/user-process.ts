import { createSlice} from "@reduxjs/toolkit";
import { SliceHeadersNamespace } from "../../mocks/sliceHeaders";
import {User} from "../../types/state";

const initialState:User = {
  isAuth : false,
  name : "",
  surname: "",
  middlename: "",
  interests: "",
  email: "",
  photoUrl: "",
};

export const userProcess = createSlice ({
  name: SliceHeadersNamespace.User,
  initialState,
  reducers: {
    changeUserAction: (state, action: {payload: User}) => {
      state.isAuth = action.payload.isAuth;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.middlename = action.payload.middlename;
      state.interests = action.payload.interests;
      state.photoUrl = action.payload.photoUrl;
    },
  },
});

export const {changeUserAction} = userProcess.actions;
