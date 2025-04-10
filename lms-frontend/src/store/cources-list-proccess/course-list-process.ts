import { createSlice } from "@reduxjs/toolkit";
import { SliceHeadersNamespace } from "../../mocks/sliceHeaders";
import { CourseList} from "../../types/state";
import { fetchCourseList } from "../api-actions";

const initialState: CourseList = {
    courseList:[],
    isCourseListDataLoading:false,
};

export const courseListProcess = createSlice({
    name: SliceHeadersNamespace.CourseList,
    initialState,
    reducers: {},
    extraReducers (builder){
        builder
        .addCase(fetchCourseList.fulfilled, (state, action) => {
            state.isCourseListDataLoading = false;
            state.courseList = action.payload.courseList;
        })
        .addCase(fetchCourseList.pending, (state) => {
            state.isCourseListDataLoading = true;
        })
        .addCase(fetchCourseList.rejected, (state) => {
            state.isCourseListDataLoading = false;
            state.courseList = [];
        })
    },
});
export { fetchCourseList };

