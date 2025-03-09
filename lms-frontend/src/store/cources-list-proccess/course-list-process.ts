import { createSlice } from "@reduxjs/toolkit";
import { SliceHeadersNamespace } from "../../mocks/sliceHeaders";
import { CourseList} from "../../types/state";
import { fetchCourseList } from "../api-actions";

const initialState: CourseList = {
    courseList:[],
};

export const courseListProcess = createSlice({
    name: SliceHeadersNamespace.CourseList,
    initialState,
    reducers: {},
    extraReducers (builder){
        builder
        .addCase(fetchCourseList.fulfilled, (state, action) => {
            state.courseList = action.payload.courseList;
        })
        .addCase(fetchCourseList.rejected, (state) => {
            state.courseList = [];
        })
    },
});
