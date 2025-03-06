import { State, store } from "./index";
import { AuthorizationStatus } from "../mocks/routes";
import { SliceHeadersNamespace } from "../mocks/sliceHeaders";
import { CourseShortInfo } from "../types/state";


export const getUserName = (state: Pick <State, SliceHeadersNamespace.User>): string => state[SliceHeadersNamespace.User].name;
export const getUserSurname = (state: Pick <State, SliceHeadersNamespace.User>): string => state[SliceHeadersNamespace.User].surname;
export const getUserMiddleName = (state: Pick <State, SliceHeadersNamespace.User>): string => state[SliceHeadersNamespace.User].middlename;
export const getUserEmail = (state: Pick <State, SliceHeadersNamespace.User>): string => state[SliceHeadersNamespace.User].email;
export const getUserInterests = (state: Pick <State, SliceHeadersNamespace.User>): string => state[SliceHeadersNamespace.User].interests;

export const getCourseDescription = (state: Pick <State, SliceHeadersNamespace.Course>): string[] => state[SliceHeadersNamespace.Course].descriptionList;
export const getCourseDocuments = (state: Pick <State, SliceHeadersNamespace.Course>): string[] => state[SliceHeadersNamespace.Course].documentList;
export const getCourseVideos = (state: Pick <State, SliceHeadersNamespace.Course>): string[] => state[SliceHeadersNamespace.Course].videoList;

export const getCourseList= (state: Pick <State, SliceHeadersNamespace.CourseList>): CourseShortInfo[] => state[SliceHeadersNamespace.CourseList].courseList;
