import {combineReducers} from '@reduxjs/toolkit';
import {SliceHeadersNamespace} from '../mocks/sliceHeaders';
import { courseListProcess } from './cources-list-proccess/course-list-process';
import { courseProcess } from './course-process/cource-process';
import { userProcess } from './user-process/user-process';
import { searchProcess } from './search-process/search-process';

export const rootReducer = combineReducers({
  [SliceHeadersNamespace.User]: userProcess.reducer,
  [SliceHeadersNamespace.Course]: courseProcess.reducer,
  [SliceHeadersNamespace.CourseList]: courseListProcess.reducer,
  [SliceHeadersNamespace.SearchResults]: searchProcess.reducer
});