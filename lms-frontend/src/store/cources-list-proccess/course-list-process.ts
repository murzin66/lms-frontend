import { createSlice } from "@reduxjs/toolkit";
import { SliceHeadersNamespace } from "../../mocks/sliceHeaders";
import { CourseList} from "../../types/state";

const initialState: CourseList = {
    courseList:[],
};

export const courseListProcess = createSlice({
    name: SliceHeadersNamespace.CourseList,
    initialState,
    reducers: {
        changeCourseListAction : (state, action : {payload:CourseList}) => {
            state.courseList = action.payload.courseList;
        },
    },
});
export const {courseListAction} = courseListProcess.actions;