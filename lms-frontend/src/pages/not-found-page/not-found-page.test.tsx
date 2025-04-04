import { render, screen } from '@testing-library/react';
import {vi} from 'vitest';
import NotFoundPage from './not-found-page';
import { withHistory, withStore } from '../../utils/mock-component';

describe('Component: NotFoundPage', () => {
  const mockProfileClickfun = vi.fn();
  const mockSearchClickfun = vi.fn();
  const mockProgressClickfun = vi.fn();

  it('should render "NotFoundPage" ', () => {

    const {withStoreComponent} = withStore(<NotFoundPage profileButtonHandler={mockProfileClickfun} handleProgressClick={mockProgressClickfun} handleSearchFunction={mockSearchClickfun}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(/Страница не найдена/)).toBeInTheDocument();
  });
});