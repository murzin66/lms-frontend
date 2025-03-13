import { createSlice} from "@reduxjs/toolkit";
import { SliceHeadersNamespace } from "../../mocks/sliceHeaders";
import {User} from "../../types/state";
import { getUserInfo, getUserProgress, userUpdateInfo } from "../api-actions";

const initialState:User = {
  isAuth : false,
  name : "",
  surname: "",
  middlename: "",
  interests: "",
  email: "",
  photoUrl: "",
  progress: [],
  isUserDataLoading: false,
  userId:0
};

export const userProcess = createSlice ({
  name: SliceHeadersNamespace.User,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
    .addCase(userUpdateInfo.fulfilled, (state, action)=> {
      state.isUserDataLoading = false;
      state.isAuth = action.payload.isAuth;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.middlename = action.payload.middlename;
      state.interests = action.payload.interests;
      state.photoUrl = action.payload.photoUrl;
      state.userId = action.payload.userId;
    })
    .addCase(userUpdateInfo.pending,(state)=>{
      state.isUserDataLoading = true;
    })
    .addCase(userUpdateInfo.rejected, (state)=> {
      state.isUserDataLoading = false;
      state.isAuth = false;
      state.name = "";
      state.surname = "";
      state.middlename = "";
      state.interests = "";
      state.photoUrl = "";
    })


    .addCase(getUserProgress.fulfilled, (state, action) => {
      state.isUserDataLoading = false;
      state.progress = action.payload;
    })
    .addCase(getUserProgress.pending, (state)=> {
      state.isUserDataLoading = true;
    })
    .addCase(getUserProgress.rejected, (state)=> {
      state.progress = [];
    })


    .addCase(getUserInfo.fulfilled, (state, action) => {
      state.isUserDataLoading = false;
      state.isAuth = action.payload.isAuth;
      state.name = action.payload.name;
      state.interests = action.payload.interests;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
      state.middlename = action.payload.middlename;
      state.photoUrl = action.payload.photoUrl;
    })
    .addCase(getUserInfo.pending, (state)=> {
      state. isUserDataLoading = true;
    })
    .addCase(getUserInfo.rejected, (state)=> {
      state.isUserDataLoading = false;
      state.isAuth = false;
      state.name = "";
      state.surname = "";
      state.middlename = "";
      state.interests = "";
      state.photoUrl = "";
    })
}});
