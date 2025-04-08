import { render, screen} from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';

import App from './App';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocs';
import { AppRoute } from '../../mocks/routes';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);

    const courseCardTestId = 'course-card';

    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({}));
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);
    const courseCard = screen.getByTestId(courseCardTestId);

    expect(courseCard).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);

    const authFormTestId = 'auth-form';

    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({}));
    mockHistory.push(AppRoute.Login);

    render(withStoreComponent);
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

  it('should render "Login Page" when no Auth user navigates to "/profile"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);

    const authFormTestId = 'auth-form';

    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({}));
    mockHistory.push(AppRoute.Profile);

    render(withStoreComponent);
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
  it('should render "Login Page" when no Auth user navigates to "/myCourses"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);

    const authFormTestId = 'auth-form';

    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({}));
    mockHistory.push(AppRoute.MyCourses);

    render(withStoreComponent);
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
  it('should render "Search Page" when  user navigates to "/search"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);

    const courseCardTestId = 'course-cards2';

    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({}));
    mockHistory.push(AppRoute.Search);

    render(withStoreComponent);

    const courseCardContainer = screen.queryByTestId(courseCardTestId);

    expect(screen.getByText(/Ничего не найдено/)).toBeInTheDocument();
    expect(screen.getByText(/Результаты поиска для/)).toBeInTheDocument();

    expect(courseCardContainer).not.toBeInTheDocument();
  });

  it('should render "Register Page" when  user navigates to "/register"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);

    const courseCardTestId = 'course-cards2';

    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({}));
    mockHistory.push(AppRoute.Register);

    render(withStoreComponent);

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
})