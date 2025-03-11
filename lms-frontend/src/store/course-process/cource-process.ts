import { createSlice} from "@reduxjs/toolkit";
import { SliceHeadersNamespace } from "../../mocks/sliceHeaders";
import {CourseType} from "../../types/state";
import { fetchCourseInfo } from "../api-actions";

const initialState: CourseType = {
  courseName:"",
  descriptionList : [],
  documentList : [],
  videoList: [],
  courseId:0
}

export const courseProcess = createSlice({
  name: SliceHeadersNamespace.Course,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
    .addCase(fetchCourseInfo.fulfilled, (state, action) => {
      state.descriptionList = action.payload.descriptionList;
      state.documentList = action.payload.documentList;
      state.videoList = action.payload.videoList;
      state.courseId = action.payload.courseId;
      state.courseName = action.payload.courseName;
    })
  }})
