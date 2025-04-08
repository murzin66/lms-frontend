import { render, screen } from '@testing-library/react';
import SearchResults from './search-results-page';
import { vi } from 'vitest';
import { withHistory, withStore } from '../../utils/mock-component';


describe('Component: Search results page', () => {
  const mockProfileButtonHandler = vi.fn();
  const mockProgressClickFun = vi.fn();
  const mockSearchClickFun = vi.fn();
  const mockSearchResultClickFun = vi.fn();


  it('should render Search results page', () => {

    const courseCardTestId = 'course-cards2';

    const {withStoreComponent} = withStore(
      <SearchResults
        handleProgressClick={mockProgressClickFun}
        handleSearchFunction={mockSearchClickFun}
        profileButtonHandler={mockProfileButtonHandler}
        handleSearchResultClickFun={mockSearchResultClickFun}
      />);

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const courseCardContainer = screen.queryByTestId(courseCardTestId);

    expect(screen.getByText(/Ничего не найдено/)).toBeInTheDocument();
    expect(screen.getByText(/Результаты поиска для/)).toBeInTheDocument();

    expect(courseCardContainer).not.toBeInTheDocument();
  });
})
