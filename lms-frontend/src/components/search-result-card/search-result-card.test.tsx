import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchResultCard from './search-result-card';
import { withHistory, withStore } from '../../utils/mock-component';
import { vi } from 'vitest';
import { CourseType } from '../../types/state';
import { emptyShortInfo } from '../../mocks/couses';
import { faker } from '@faker-js/faker';

describe('Component: SearchResultCard', () => {
  const mockSearchResultClickFun = vi.fn();
  const mockShortInfo:CourseType = {
    courseName : faker.string.sample(),
    descriptionList: [],
    documentList: [],
    videoList: [],
    courseId: faker.number.int(),
    isCourseDataLoading: false,
    shortInfo: emptyShortInfo,
    courseTag: faker.string.sample(),
    longDescription: faker.string.sample(),
    competences:[]
  };
  it('should render "SearchResultCard" ', () => {

    const {withStoreComponent} = withStore(<SearchResultCard handleSearchResultClickFun={mockSearchResultClickFun} shortInfo={mockShortInfo}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const CourseCardTestId = 'course-card-test';
    const CourseMetaTestId = 'course-meta';

    const expectedLogoTestId = screen.getByTestId(CourseCardTestId);
    const expectedCoursesTestId = screen.getByTestId(CourseMetaTestId);

    expect(expectedLogoTestId).toBeInTheDocument();
    expect(expectedCoursesTestId).toBeInTheDocument();

    expect(screen.getByText(/Трудоемкость/)).toBeInTheDocument();

  });
  it ('should call mockSearchResultClickFun when press course card', async()=>{
    const {withStoreComponent} = withStore(<SearchResultCard handleSearchResultClickFun={mockSearchResultClickFun} shortInfo={mockShortInfo}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const courseTitle = screen.getByTestId("course-title");

    await userEvent.click(courseTitle);

    expect (courseTitle).toBeInTheDocument();
    expect (mockSearchResultClickFun).toHaveBeenCalledTimes(1);
  })
});