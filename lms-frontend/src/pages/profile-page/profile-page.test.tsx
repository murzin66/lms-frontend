import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { withHistory, withStore } from '../../utils/mock-component';
import ProfilePage from './profile-page';
import userEvent from '@testing-library/user-event';


describe('Component: Profile page', () => {
  const mockProfileButtonHandler = vi.fn();
  const mockProgressClickFun = vi.fn();
  const mockSearchClickFun = vi.fn();
  const mockLogoutAction = vi.fn();
  const mockUserDataChange = vi.fn();
  it('should render Profile page', () => {

    const profileTestId = 'profile-form';


    const {withStoreComponent} = withStore(
      <ProfilePage
        handleProgressClick={mockProgressClickFun}
        handleSearchFunction={mockSearchClickFun}
        profileButtonHandler={mockProfileButtonHandler}
        handleLogoutAction={mockLogoutAction}
        handleUserDataChangeFunction={mockUserDataChange}
      />);

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const saveChangesButton = screen.getByRole('button', { name: /Сохранить/i });
    const logoutButton = screen.getByRole('button', { name: /Выйти/i });
    const profile = screen.getByTestId(profileTestId);

    const  nameField = screen.getByRole('textbox', {name:/Имя/i});
    const  surnameField = screen.getByRole('textbox', {name:/Фамилия/i});
    const  midnameField = screen.getByRole('textbox', {name:/Отчество/i});
    const  emailField = screen.getByRole('textbox', {name:/Email/i});
    const  interestsField = screen.getByRole('textbox', {name:/Интересы/i});

    expect(profile).toBeInTheDocument();
    expect(saveChangesButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
    expect(screen.getByText(/Профиль пользователя/)).toBeInTheDocument();
    expect(nameField).toBeInTheDocument();
    expect(surnameField).toBeInTheDocument();
    expect(midnameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(interestsField).toBeInTheDocument();
  });
  it('should call function when save button is pressed', async() => {

    const {withStoreComponent} = withStore(
      <ProfilePage
        handleProgressClick={mockProgressClickFun}
        handleSearchFunction={mockSearchClickFun}
        profileButtonHandler={mockProfileButtonHandler}
        handleLogoutAction={mockLogoutAction}
        handleUserDataChangeFunction={mockUserDataChange}
      />);

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const saveChangesButton = screen.getByRole('button', { name: /Сохранить/i });

    await userEvent.click(saveChangesButton);
    expect(mockUserDataChange).toHaveBeenCalledTimes(1);
  });
  it('should call function when save button is pressed', async() => {

    const profileTestId = 'profile-form';


    const {withStoreComponent} = withStore(
      <ProfilePage
        handleProgressClick={mockProgressClickFun}
        handleSearchFunction={mockSearchClickFun}
        profileButtonHandler={mockProfileButtonHandler}
        handleLogoutAction={mockLogoutAction}
        handleUserDataChangeFunction={mockUserDataChange}
      />);

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const logoutButton = screen.getByRole('button', { name: /Выйти/i });

    await userEvent.click(logoutButton);
    expect(mockLogoutAction).toHaveBeenCalledTimes(1);
  });
})