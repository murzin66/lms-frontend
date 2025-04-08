import { render, screen } from '@testing-library/react';
import ProgressPage from './progress-page';
import { vi } from 'vitest';
import { withHistory, withStore } from '../../utils/mock-component';


describe('Component: Progress page', () => {
  const mockProfileButtonHandler = vi.fn();
  const mockProgressClickFun = vi.fn();
  const mockSearchClickFun = vi.fn();

  it('should render Progress page', () => {

    const chartContainerTestId = 'chart-container';
    const progressContainerTestId = "progress-container";

    const {withStoreComponent} = withStore(
      <ProgressPage
        handleProgressClick={mockProgressClickFun}
        handleSearchFunction={mockSearchClickFun}
        profileButtonHandler={mockProfileButtonHandler}
        courses={[]}
      />);

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const chartContainer = screen.getByTestId(chartContainerTestId);
    const progressContainer = screen.getByTestId(progressContainerTestId);

    expect(screen.getByText(/Прогресс обучения/)).toBeInTheDocument();
    expect(screen.getByText(/Прогресс курса/)).toBeInTheDocument();

    expect(chartContainer).toBeInTheDocument();
    expect(progressContainer).toBeInTheDocument();
  });
})
