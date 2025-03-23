import {Route, Routes} from "react-router-dom";
import MainPage from '../../pages/main-page/main-page';
import { AppRoute, AuthorizationStatus } from '../../mocks/routes';
import SearchResults from '../../pages/search-results-page/search-results-page';
import Course from '../../pages/course-page/course-page';
import Progress from '../../pages/progress-page/progress-page';
import ProfilePage from '../../pages/profile-page/profile-page';
import PrivateRoute from '../private-route/private-route';
import LoginPage from '../../pages/login-page/login-page';
import Register from '../register/register';
import { useAppSelector } from '../../hooks';
import { getCourse, getCourseList, getEnrolledCourses, getUserProgress, isDataLoading, isUserAuth } from '../../store/selectors';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoadingPage from '../../pages/loading-page/loading-page';
import "../../markup/styles.css";

function App() {

  const courseList = useAppSelector(getCourseList);
  const course = useAppSelector(getCourse);
  const progress = useAppSelector(getUserProgress);
  const isAuth = useAppSelector(isUserAuth);
  const authStatus = isAuth ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth;
  const enrolledCourses = useAppSelector(getEnrolledCourses);
  const isLoading = useAppSelector(isDataLoading);
  if (isLoading) {
    return (
      <LoadingPage />
    );
  }
  return (
    <Routes>
      <Route
      path={AppRoute.Main}
      element = {<MainPage Cources={courseList}/>}/>

      <Route
      path={AppRoute.Search}
      element = {<SearchResults/>}
      />

      <Route
      path={AppRoute.Course}
      element = {<Course courseInfo = {course} isAuth = {isAuth} isEnrolled = {enrolledCourses.includes(course.courseId)}/>}/>

      <Route
      path = {AppRoute.Progress}
      element = {
        <PrivateRoute authorizationStatus = {authStatus}>
      <Progress courses={progress}/>
      </PrivateRoute>}/>

      <Route
      path = {AppRoute.Profile}
      element = {
        <PrivateRoute authorizationStatus={authStatus}>
          <ProfilePage />
        </PrivateRoute>
      }/>

      <Route
      path = {AppRoute.MyCourses}
      element = {
        <PrivateRoute authorizationStatus={authStatus}>
          <MainPage Cources={courseList.filter((course)=> enrolledCourses.includes(course.id))}/>
        </PrivateRoute>
      }
      />
      <Route
      path = {AppRoute.Login}
      element = {
        <LoginPage/>
      }
      />

      <Route
      path = {AppRoute.Register}
      element = {
        <Register/>
      }/>

      <Route
      path='*'
      element = {
        <NotFoundPage/>
      }
        />
    </Routes>
  );
}

export default App;
