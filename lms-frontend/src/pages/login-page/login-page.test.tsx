import { render, screen } from '@testing-library/react';
import LoginPage from './login-page';
import { vi } from 'vitest';
import { withHistory, withStore } from '../../utils/mock-component';
import userEvent from '@testing-library/user-event';


describe('Component: Login page', () => {
  const mockProfileButtonHandler = vi.fn();
  const mockProgressClickFun = vi.fn();
  const mockSearchClickFun = vi.fn();
  const mockLoginClickFun =vi.fn();
  const mockHandleToggle = vi.fn();
  it('should render Login page', () => {

    const authFormTestId = 'auth-form';

    const {withStoreComponent} = withStore(
      <LoginPage
        handleProgressClick={mockProgressClickFun}
        handleSearchFunction={mockSearchClickFun}
        profileButtonHandler={mockProfileButtonHandler}
        handleLoginClick={mockLoginClickFun}
        handleToggle={mockHandleToggle}
      />);

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const authForm = screen.getByTestId(authFormTestId);
    const loginButton = screen.getByRole('button', { name: /Войти/i });
    const registerButton = screen.getByRole('button', { name: /Зарегистрироваться/i });

    const loginField = screen.getByRole('textbox', {name:/Логин/i});
    const passwordField = screen.getByLabelText(/Пароль/i);

    expect(authForm).toBeInTheDocument();
    expect(screen.getByText(/Авторизация/)).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
    expect (loginField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  it ('should call login function when login button is pressed', async()=> {

    const {withStoreComponent} = withStore(
      <LoginPage
        handleProgressClick={mockProgressClickFun}
        handleSearchFunction={mockSearchClickFun}
        profileButtonHandler={mockProfileButtonHandler}
        handleLoginClick={mockLoginClickFun}
        handleToggle={mockHandleToggle}
      />);

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const loginButton = screen.getByRole('button', { name: /Войти/i });

    const loginField = screen.getByRole('textbox', {name:/Логин/i});
    const passwordField = screen.getByLabelText(/Пароль/i);

    await userEvent.type(loginField, "test@mail.ru");
    await userEvent.type(passwordField,"testpassword");

    await userEvent.click(loginButton);

    expect(mockLoginClickFun).toHaveBeenCalledTimes(1);

  })
  it ('should call toggle function when toggle button is pressed', async()=> {
    const {withStoreComponent} = withStore(
      <LoginPage
        handleProgressClick={mockProgressClickFun}
        handleSearchFunction={mockSearchClickFun}
        profileButtonHandler={mockProfileButtonHandler}
        handleLoginClick={mockLoginClickFun}
        handleToggle={mockHandleToggle}
      />);

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const registerButton = screen.getByRole('button', { name: /Зарегистрироваться/i });

    await userEvent.click(registerButton);

    expect(mockHandleToggle).toHaveBeenCalledTimes(1);
  })
})