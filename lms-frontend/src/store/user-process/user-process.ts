import { createSlice} from "@reduxjs/toolkit";
import { SliceHeadersNamespace } from "../../mocks/sliceHeaders";
import {User} from "../../types/state";
import { checkAuthAction, enrollAction, getUserInfo, getUserProgressAction, loginAction, logoutAction, userUpdateInfo } from "../api-actions";
import { AuthorizationStatus } from "../../mocks/routes";

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
  userId:0,
  recommendations: [],
  enrolledCourses: [],
  password:"",
  recommendationTags: []
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
      state.recommendationTags = action.payload.recommendationTags;
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


    .addCase(getUserProgressAction.fulfilled, (state, action) => {
      state.isUserDataLoading = false;
      state.progress = action.payload;
    })
    .addCase(getUserProgressAction.pending, (state)=> {
      state.isUserDataLoading = true;
    })
    .addCase(getUserProgressAction.rejected, (state)=> {
      state.progress = [];
    })


    .addCase(getUserInfo.fulfilled, (state, action) => {
      state.isUserDataLoading = false;
      state.isAuth = action.payload.isAuth;
      state.name = action.payload.name;
      state.interests = action.payload.interests;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
      state.middlename = action.payload.middlename;
      state.photoUrl = action.payload.photoUrl;
      state.recommendations =action.payload.recommendations;
      state.enrolledCourses = action.payload.enrolledCourses;
      state.recommendationTags = action.payload.recommendationTags;
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

    .addCase(checkAuthAction.fulfilled, (state)=> {
      state.isAuth = true;
      state.isUserDataLoading = false;
    })
    .addCase(checkAuthAction.pending, (state) => {
      state.isUserDataLoading = true;
    })
    .addCase(checkAuthAction.rejected, (state)=> {
      state.isAuth = false;
      state.isUserDataLoading = false;
    })

    .addCase(logoutAction.fulfilled, (state) => {
      state.isAuth = false;
      state.isUserDataLoading = false;
    })
    .addCase(logoutAction.pending, (state) => {
      state.isUserDataLoading =  true;
    })
    .addCase(enrollAction.fulfilled, (state, action)=>{
      state.isUserDataLoading = false;
      state.enrolledCourses = action.payload;
    })
    .addCase(enrollAction.pending, (state)=> {
      state.isUserDataLoading = true;
    })
    .addCase(enrollAction.rejected, (state)=> {
      state.isUserDataLoading = false;
    })
}});

export { userUpdateInfo, getUserProgressAction, getUserInfo, checkAuthAction, logoutAction, enrollAction };
