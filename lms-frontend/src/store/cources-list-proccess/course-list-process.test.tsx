import { fetchCourseList, courseListProcess } from './course-list-process';
import { mockCourseList } from '../../mocks/mock-store';

describe('CourseList slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
        courseList:[],
        isCourseListDataLoading:false,
    };

    const result = courseListProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      courseList:[],
      isCourseListDataLoading:false,
  };
    const result = courseListProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });
  it('should change CourseList with fetchCourseList action', () => {
    const expectedResult = {
      courseList:[],
      isCourseListDataLoading:false,
  };
  const result = courseListProcess.reducer(
    undefined,
    fetchCourseList.fulfilled(
      mockCourseList, '', undefined)
  );
    expect(result).toEqual(expectedResult);

  });
});