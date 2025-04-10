import { fetchCourseInfo, courseProcess } from './cource-process';
import { mockCourseList } from '../../mocks/mock-store';
import { emptyShortInfo } from '../../mocks/couses';
import { mockCourseInfo } from '../../mocks/mock-courses';

describe('Course slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      courseName:"",
      descriptionList : [],
      documentList : [],
      videoList: [],
      courseId:0,
      isCourseDataLoading: false,
      shortInfo: emptyShortInfo,
      courseTag: "",
      competences:[],
      longDescription:""
    }
    const result = courseProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      courseName:"",
      descriptionList : [],
      documentList : [],
      videoList: [],
      courseId:0,
      isCourseDataLoading: false,
      shortInfo: emptyShortInfo,
      courseTag: "",
      competences:[],
      longDescription:""
    }
    const result = courseProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });
  it('should change Course with fetchCourseList action', () => {
    const expectedResult = {
      courseName:mockCourseInfo.courseName,
      descriptionList : mockCourseInfo.descriptionList,
      documentList : mockCourseInfo.documentList,
      videoList: mockCourseInfo.videoList,
      courseId:mockCourseInfo.courseId,
      isCourseDataLoading: false,
      shortInfo: mockCourseInfo.shortInfo,
      courseTag: mockCourseInfo.courseTag,
      competences:mockCourseInfo.competences,
      longDescription:mockCourseInfo.longDescription}
  const result = courseProcess.reducer(
    undefined,
    fetchCourseInfo.fulfilled(
      mockCourseInfo, '', 1)
  );
    expect(result).toEqual(expectedResult);

  });
});