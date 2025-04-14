import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Register from './register_case';
import { withHistory, withStore } from '../../utils/mock-component';
import { vi } from 'vitest';
import { faker } from '@faker-js/faker';

describe('Component: Register', () => {
  const mockProfileClickFun = vi.fn();
  const mockProgressClickFun = vi.fn();
  const mockSearchClickFun = vi.fn();
  const mockToggleClickFun = vi.fn();
  const mockRegisterClickFun = vi.fn();

  it('should render "Register correct" ', () => {

    const {withStoreComponent} = withStore(<Register profileButtonHandler={mockProfileClickFun} handleProgressClick={mockProgressClickFun} handleSearchFunction={mockSearchClickFun} handleToggleClick={mockToggleClickFun} handleRegisterClick={mockRegisterClickFun}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const AuthTestId = 'auth-container';
    const expectedLogoTestId = screen.getByTestId(AuthTestId);

    const surnameField = screen.getByRole('textbox', {name:/Фамилия/i});
    const nameField = screen.getByRole('textbox', {name:/Имя/i});
    const midnameField = screen.getByRole('textbox', {name:/Отчество/i});
    const emailField = screen.getByRole('textbox', {name:/Email/i});
    const passwordField = screen.getByLabelText(/Пароль/i);
    const interestsField = screen.getByRole('textbox', {name:/Интересы/i});


    const registerButton = screen.getByRole('button', { name: /Зарегистрироваться/i });
    const toggleButton = screen.getByRole('button', { name: /Уже есть аккаунт?/i });


    expect (surnameField).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
    expect(toggleButton).toBeInTheDocument();

    expect (expectedLogoTestId).toBeInTheDocument();
    expect (nameField).toBeInTheDocument();
    expect (midnameField).toBeInTheDocument();
    expect (emailField).toBeInTheDocument();
    expect (passwordField).toBeInTheDocument();
    expect (interestsField).toBeInTheDocument();

  });
  it ('should call functions when press buttons', async () => {
    const {withStoreComponent} = withStore(<Register profileButtonHandler={mockProfileClickFun} handleProgressClick={mockProgressClickFun} handleSearchFunction={mockSearchClickFun} handleToggleClick={mockToggleClickFun} handleRegisterClick={mockRegisterClickFun}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const registerButton = screen.getByRole('button', { name: /Зарегистрироваться/i });
    const toggleButton = screen.getByRole('button', { name: /Уже есть аккаунт?/i });

    await userEvent.click(toggleButton);

    const surnameField = screen.getByRole('textbox', {name:/Фамилия/i});
    const nameField = screen.getByRole('textbox', {name:/Имя/i});
    const midnameField = screen.getByRole('textbox', {name:/Отчество/i});
    const emailField = screen.getByRole('textbox', {name:/Email/i});
    const passwordField = screen.getByLabelText(/Пароль/i);
    const interestsField = screen.getByRole('textbox', {name:/Интересы/i});


    await userEvent.type(emailField, 'test@mail.com');
    await userEvent.type (surnameField, 'test');
    await userEvent.type (nameField, 'test');
    await userEvent.type (midnameField, 'test');
    await userEvent.type (passwordField, 'test');
    await userEvent.type (interestsField, 'test');
    await userEvent.click(registerButton);

    expect (registerButton).toBeInTheDocument();
    expect (toggleButton).toBeInTheDocument();
    expect (mockRegisterClickFun).toHaveBeenCalledTimes(1);
    expect (mockToggleClickFun).toHaveBeenCalledTimes(1);

  })

});