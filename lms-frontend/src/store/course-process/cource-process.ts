import { createSlice} from "@reduxjs/toolkit";
import { SliceHeadersNamespace } from "../../mocks/sliceHeaders";
import {Course} from "../../types/state";

const initialState: Course = {
  descriptionList : [],
  documentList : [],
  videoList: [],
}

export const courseProcess = createSlice({
  name: SliceHeadersNamespace.Course,
  initialState,
  reducers: {
    changeCourseAction: (state, action: {payload:Course}) => {
      state.descriptionList = action.payload.descriptionList;
      state.documentList = action.payload.documentList;
      state.videoList = action.payload.videoList;
    },
  },
});

export const {changeCourseAction} = courseProcess.actions;