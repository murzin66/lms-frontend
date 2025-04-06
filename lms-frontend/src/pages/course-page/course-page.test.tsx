import { render, screen } from '@testing-library/react';
import CoursePage from './course-page';
import { vi } from 'vitest';
import { emptyShortInfo } from '../../mocks/couses';
import { mockCourseInfo } from '../../mocks/mock-courses';
import { withHistory, withStore } from '../../utils/mock-component';
import userEvent from '@testing-library/user-event';


describe('Component: Course page', () => {
  const mockprofileButtonHandler = vi.fn();
  const mockProgressClickFun = vi.fn();
  const mockSearchClickFun = vi.fn();
  const mockhandleRecommendedCourseClickFun  =vi.fn();
  const mockhandleCourseEnrollFun = vi.fn();
  it('should render course page correct when user is Auth and Enrolled', () => {

    const coursePageEnrolledProp = {
      isAuth: true,
      isEnrolled: true,
      courseinfo: mockCourseInfo
    };

    const enrolledCourseContainerTestId = 'enrolled-course-container';
    const enrolledCourseContentTestId = 'enrolled-course-content';
    const recomendationBarTestId = 'recomendation-bar';

    const {withStoreComponent} = withStore(<CoursePage
      isAuth = {coursePageEnrolledProp.isAuth}
      isEnrolled = {coursePageEnrolledProp.isEnrolled}
      courseInfo={coursePageEnrolledProp.courseinfo}
      handleCourseEnrollFun={mockhandleCourseEnrollFun}
      handleProgressClick={mockProgressClickFun}
      handleRecommendedCourseClickFun={mockhandleRecommendedCourseClickFun}
      handleSearchFunction={mockSearchClickFun}
      profileButtonHandler={mockprofileButtonHandler}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const enrolledCourseContainer = screen.getByTestId(enrolledCourseContainerTestId);
    const enrolledCourses = screen.queryByTestId(enrolledCourseContentTestId);
    const recomendationBar = screen.queryByTestId(recomendationBarTestId);

    expect(enrolledCourseContainer).toBeInTheDocument();
    expect(enrolledCourses).toBeInTheDocument();
    expect(recomendationBar).toBeInTheDocument();
  });
  it('should render course page correct when user is Auth and not Enrolled',()=> {
    const coursePageEnrolledProp = {
      isAuth: true,
      isEnrolled: false,
      courseinfo: mockCourseInfo
    };

    const competenciesTestId = 'competencies';

    const {withStoreComponent} = withStore(<CoursePage
      isAuth = {coursePageEnrolledProp.isAuth}
      isEnrolled = {coursePageEnrolledProp.isEnrolled}
      courseInfo={coursePageEnrolledProp.courseinfo}
      handleCourseEnrollFun={mockhandleCourseEnrollFun}
      handleProgressClick={mockProgressClickFun}
      handleRecommendedCourseClickFun={mockhandleRecommendedCourseClickFun}
      handleSearchFunction={mockSearchClickFun}
      profileButtonHandler={mockprofileButtonHandler}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const conpetencies = screen.queryByTestId(competenciesTestId);
    const enrollButton = screen.getByRole('button', { name: /Записаться/i });

    expect(conpetencies).toBeInTheDocument();
    expect(enrollButton).toBeInTheDocument();
  })
  it('should call function when enroll button is pressed', async()=>{
    const coursePageEnrolledProp = {
      isAuth: true,
      isEnrolled: false,
      courseinfo: mockCourseInfo
    };


    const {withStoreComponent} = withStore(<CoursePage
      isAuth = {coursePageEnrolledProp.isAuth}
      isEnrolled = {coursePageEnrolledProp.isEnrolled}
      courseInfo={coursePageEnrolledProp.courseinfo}
      handleCourseEnrollFun={mockhandleCourseEnrollFun}
      handleProgressClick={mockProgressClickFun}
      handleRecommendedCourseClickFun={mockhandleRecommendedCourseClickFun}
      handleSearchFunction={mockSearchClickFun}
      profileButtonHandler={mockprofileButtonHandler}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const enrollButton = screen.getByRole('button', { name: /Записаться/i });
    await userEvent.click(enrollButton);

    expect (mockhandleCourseEnrollFun).toHaveBeenCalledTimes(1);
  })
});

