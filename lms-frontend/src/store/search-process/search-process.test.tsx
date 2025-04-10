import { getSearchResult, searchProcess } from './search-process';
import { mockCourseList, mockSearch } from '../../mocks/mock-store';
import { emptyShortInfo } from '../../mocks/couses';
import { mockCourseInfo } from '../../mocks/mock-courses';

describe('Search slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      results: [],
      isResultsLoading: false,
      query:""
    }
    const result = searchProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      results: [],
      isResultsLoading: false,
      query:""
    }
    const result = searchProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });
  it('should change search info with getSearchResult action', () => {
    const expectedResult = {
      results: [],
      isResultsLoading: false,
      query:""
    }
  const result = searchProcess.reducer(
    undefined,
    getSearchResult.fulfilled(
      [], '','')
  );
    expect(result).toEqual(expectedResult);

  });
});