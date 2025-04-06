import { render, screen } from '@testing-library/react';
import MainPage from './main-page';
import { vi } from 'vitest';
import { withHistory, withStore } from '../../utils/mock-component';


describe('Component: Main page', () => {
  const mockProfileButtonHandler = vi.fn();
  const mockProgressClickFun = vi.fn();
  const mockSearchClickFun = vi.fn();
  const mockNavigateNoCourseFun = vi.fn();
  it('should render Main page', () => {

    const courseCardTestId = 'course-card';

    const {withStoreComponent} = withStore(
      <MainPage
        handleProgressClick={mockProgressClickFun}
        handleSearchFunction={mockSearchClickFun}
        profileButtonHandler={mockProfileButtonHandler}
        Cources={[]}
        navigateToCourseFun={mockNavigateNoCourseFun}
      />);

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const courseCard = screen.getByTestId(courseCardTestId);
    expect(courseCard).toBeInTheDocument();

  });
})