import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './Header';
import { withHistory, withStore } from '../../utils/mock-component';
import { vi } from 'vitest';

describe('Component: Header', () => {
  const mockProfileClickFun = vi.fn();
  const mockProgressClickFun = vi.fn();
  const mockSearchClickFun = vi.fn();

  it('should render "Header" ', () => {

    const {withStoreComponent} = withStore(<Header profileButtonHandler={mockProfileClickFun} handleProgressClick={mockProgressClickFun} handleSearchFunction={mockSearchClickFun}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const LogoTestId = 'logo';
    const CoursesTestId = 'courses-bank';
    const MyCoursesTestId = 'my-courses';
    const ProgressTestId = 'progress';

    const expectedLogoTestId = screen.getByTestId(LogoTestId);
    const expectedCoursesTestId = screen.getByTestId(CoursesTestId);
    const expectedMyCoursesTestId = screen.getByTestId(MyCoursesTestId);
    const expectedProgressTestId = screen.getByTestId(ProgressTestId);

    const inputField = screen.getByRole('textbox');

    const searchButton = screen.getByRole('button', { name: /Поиск/i });
    const profileButton = screen.getByRole('button', { name: /перейти в фото профиля/i });


    expect (inputField).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(profileButton).toBeInTheDocument();

    expect (expectedLogoTestId).toBeInTheDocument();
    expect (expectedCoursesTestId).toBeInTheDocument();
    expect (expectedMyCoursesTestId).toBeInTheDocument();
    expect (expectedProgressTestId).toBeInTheDocument();

  });
  it ('should handle profile button click', async ()=> {
    const {withStoreComponent} = withStore(<Header profileButtonHandler={mockProfileClickFun} handleProgressClick={mockProgressClickFun} handleSearchFunction={mockSearchClickFun}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const profileButton = screen.getByRole('button', { name: /перейти в фото профиля/i });
    await userEvent.click(profileButton);

    expect (mockProfileClickFun).toHaveBeenCalledTimes(1);
  });
  it ('should handle search button click', async ()=> {
    const {withStoreComponent} = withStore(<Header profileButtonHandler={mockProfileClickFun} handleProgressClick={mockProfileClickFun} handleSearchFunction={mockSearchClickFun}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const searchButton = screen.getByRole('button', { name: /Поиск/i });
    await userEvent.click(searchButton);

    expect (mockSearchClickFun).toHaveBeenCalledTimes(1);

  })
  it ('should handle progress click', async ()=>{
    const {withStoreComponent} = withStore(<Header profileButtonHandler={mockProfileClickFun} handleProgressClick={mockProgressClickFun} handleSearchFunction={mockSearchClickFun}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const profileButton = screen.getByTestId('progress');
    await userEvent.click(profileButton);

    expect (mockProgressClickFun).toHaveBeenCalledTimes(1);
  })
});