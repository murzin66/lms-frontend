import { State, store } from "./index";
import { AuthorizationStatus } from "../mocks/routes";
import { SliceHeadersNamespace } from "../mocks/sliceHeaders";
import { CourseProgress, CourseShortInfo, CourseType, Recommendation, SearchResults } from "../types/state";


export const getUserName = (state: Pick <State, SliceHeadersNamespace.User>): string => state[SliceHeadersNamespace.User].name;
export const getUserSurname = (state: Pick <State, SliceHeadersNamespace.User>): string => state[SliceHeadersNamespace.User].surname;
export const getUserMiddleName = (state: Pick <State, SliceHeadersNamespace.User>): string => state[SliceHeadersNamespace.User].middlename;
export const getUserEmail = (state: Pick <State, SliceHeadersNamespace.User>): string => state[SliceHeadersNamespace.User].email;
export const getUserInterests = (state: Pick <State, SliceHeadersNamespace.User>): string => state[SliceHeadersNamespace.User].interests;
export const getUserId = (state: Pick <State, SliceHeadersNamespace.User>): number => state[SliceHeadersNamespace.User].userId;
export const getUserProgress = (state: Pick <State, SliceHeadersNamespace.User>): CourseProgress[] => state[SliceHeadersNamespace.User].progress;
export const isUserAuth = (state: Pick <State, SliceHeadersNamespace.User>): boolean => state[SliceHeadersNamespace.User].isAuth;
export const getRecommendations = (state:Pick <State, SliceHeadersNamespace.User>): Recommendation[] => state[SliceHeadersNamespace.User].recommendations;
export const getEnrolledCourses = (state:Pick <State, SliceHeadersNamespace.User>): number[] => state[SliceHeadersNamespace.User].enrolledCourses;

export const getCourseDescription = (state: Pick <State, SliceHeadersNamespace.Course>): string[] => state[SliceHeadersNamespace.Course].descriptionList;
export const getCourseDocuments = (state: Pick <State, SliceHeadersNamespace.Course>): string[] => state[SliceHeadersNamespace.Course].documentList;
export const getCourseVideos = (state: Pick <State, SliceHeadersNamespace.Course>): string[] => state[SliceHeadersNamespace.Course].videoList;
export const getCourse = (state:Pick <State, SliceHeadersNamespace.Course>):CourseType => state[SliceHeadersNamespace.Course];

export const getCourseList= (state: Pick <State, SliceHeadersNamespace.CourseList>): CourseShortInfo[] => state[SliceHeadersNamespace.CourseList].courseList;

export const getSearchResults = (state: Pick <State, SliceHeadersNamespace.SearchResults>): CourseShortInfo[] => state[SliceHeadersNamespace.SearchResults].results;
export const getQuery = (state: Pick <State, SliceHeadersNamespace.SearchResults>): string => state[SliceHeadersNamespace.SearchResults].query;
const isUserDataLoading = (state: Pick <State, SliceHeadersNamespace.User>):boolean => state[SliceHeadersNamespace.User].isUserDataLoading;
const isCourseDataLoading = (state: Pick <State, SliceHeadersNamespace.Course>):boolean => state [SliceHeadersNamespace.Course].isCourseDataLoading;
const isCourseListDataLoading = (state:Pick <State, SliceHeadersNamespace.CourseList>):boolean => state[SliceHeadersNamespace.CourseList].isCourseListDataLoading;
const isResultsLoading = (state:Pick<State, SliceHeadersNamespace.SearchResults>): boolean => state[SliceHeadersNamespace.SearchResults].isResultsLoading;
export const isDataLoading = isUserDataLoading || isCourseDataLoading || isCourseListDataLoading || isResultsLoading;