import {Route, Routes, useNavigate} from "react-router-dom";
import MainPage from '../../pages/main-page/main-page';
import { AppRoute, AuthorizationStatus } from '../../mocks/routes';
import SearchResults from '../../pages/search-results-page/search-results-page';
import Course from '../../pages/course-page/course-page';
import Progress from '../../pages/progress-page/progress-page';
import ProfilePage from '../../pages/profile-page/profile-page';
import PrivateRoute from '../private-route/private-route';
import LoginPage from '../../pages/login-page/login-page';
import Register from '../register/register';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCourse, getCourseList, getEnrolledCourses, getUserId, getUserProgress, isDataLoading, isUserAuth } from '../../store/selectors';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoadingPage from '../../pages/loading-page/loading-page';
import "../../markup/styles.css";
import { fetchCourseInfo, getSearchResult, getUserProgressAction, registerAction } from "../../store/api-actions";
import { changeQueryAction } from "../../store/search-process/search-process";
import { AuthData } from "../../types/auth-data";

function App() {

  const courseList = useAppSelector(getCourseList);
  const course = useAppSelector(getCourse);
  const progress = useAppSelector(getUserProgress);
  const isAuth = useAppSelector(isUserAuth);
  const authStatus = isAuth ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth;
  const enrolledCourses = useAppSelector(getEnrolledCourses);
  const isLoading = useAppSelector(isDataLoading);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userId = useAppSelector(getUserId);

  const profileButtonHandler = () => {
    navigate("/profile");
  }
  const handleProgressClick= () => {
    dispatch(getUserProgressAction(userId));
  }
  const handleSearchFunction = (search:string) => {
    navigate("/search");
      dispatch(getSearchResult(search));
      dispatch(changeQueryAction(search));
  }
  const navigateToCourseFun = (courseNum: number) =>{
    dispatch(fetchCourseInfo(courseNum));
    navigate(`/Course/${courseNum}`);
  }

  const handleRegisterClick = (registerInfo: AuthData) =>{
    dispatch(registerAction(registerInfo));

  }

  const handleToggleClick = (route: string) => {
    navigate(route);
  }

  if (isLoading) {
    return (
      <LoadingPage />
    );
  }
  return (
    <Routes>
      <Route
      path={AppRoute.Main}
      element = {<MainPage Cources={courseList} profileButtonHandler={profileButtonHandler} handleProgressClick={handleProgressClick} handleSearchFunction={handleSearchFunction} navigateToCourseFun={navigateToCourseFun}/>}/>

      <Route
      path={AppRoute.Search}
      element = {<SearchResults profileButtonHandler = {profileButtonHandler} handleProgressClick={handleProgressClick} handleSearchFunction={handleSearchFunction} handleSearchResultClickFun={navigateToCourseFun}/>}
      />

      <Route
      path={AppRoute.Course}
      element = {<Course courseInfo = {course} isAuth = {isAuth} isEnrolled = {enrolledCourses.includes(course.courseId)} profileButtonHandler={profileButtonHandler} handleProgressClick={handleProgressClick} handleSearchFunction={handleSearchFunction} handleRecommendedCourseClickFun={navigateToCourseFun}/>}/>

      <Route
      path = {AppRoute.Progress}
      element = {
        <PrivateRoute authorizationStatus = {authStatus}>
      <Progress courses={progress} profileButtonHandler= {profileButtonHandler } handleProgressClick={handleProgressClick} handleSearchFunction={handleSearchFunction}/>
      </PrivateRoute>}/>

      <Route
      path = {AppRoute.Profile}
      element = {
        <PrivateRoute authorizationStatus={authStatus}>
          <ProfilePage profileButtonHandler={profileButtonHandler} handleProgressClick={handleProgressClick} handleSearchFunction={handleSearchFunction}/>
        </PrivateRoute>
      }/>

      <Route
      path = {AppRoute.MyCourses}
      element = {
        <PrivateRoute authorizationStatus={authStatus}>
          <MainPage Cources={courseList.filter((course)=> enrolledCourses.includes(course.id))} profileButtonHandler={profileButtonHandler} handleProgressClick={handleProgressClick} handleSearchFunction={handleSearchFunction} navigateToCourseFun={navigateToCourseFun}/>
        </PrivateRoute>
      }
      />
      <Route
      path = {AppRoute.Login}
      element = {
        <LoginPage profileButtonHandler={profileButtonHandler} handleProgressClick={handleProgressClick} handleSearchFunction={handleSearchFunction}/>
      }
      />

      <Route
      path = {AppRoute.Register}
      element = {
        <Register profileButtonHandler={profileButtonHandler} handleProgressClick={handleProgressClick} handleSearchFunction={handleSearchFunction} handleRegisterClick = {handleRegisterClick} handleToggleClick= {handleToggleClick}/>
      }/>

      <Route
      path='*'
      element = {
        <NotFoundPage profileButtonHandler={profileButtonHandler} handleProgressClick={handleProgressClick} handleSearchFunction={handleSearchFunction}/>
      }
        />
    </Routes>
  );
}

export default App;
