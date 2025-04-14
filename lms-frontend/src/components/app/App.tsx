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
import { enrollAction, fetchCourseInfo, getSearchResult, getUserProgressAction, loginAction, logoutAction, registerAction, userUpdateInfo } from "../../store/api-actions";
import { changeQueryAction } from "../../store/search-process/search-process";
import { AuthData } from "../../types/auth-data";
import { redirectToRoute } from "../../store/redirect-action";
import { getToken } from "../../services/token";
import { User } from "../../types/state";

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

  const handleLoginClick= (loginInfo: {email: string, password:string})=>{
    dispatch(loginAction(loginInfo));
    dispatch(redirectToRoute(AppRoute.Profile));
  }
  const handleLogoutAction = ()=>{
    dispatch(logoutAction(getToken()));
  }
  const handleUserDataChange = (newUserData: User) => {
    dispatch(userUpdateInfo(newUserData));
  }
  const handleCourseEnrollFun = (
    isAuth: boolean,
    enrollInfo: {
      courseId: number;
      email: string;
      courseTag: string;
  }) =>{
    if (!isAuth){
      dispatch(redirectToRoute(AppRoute.Login));
    }
    else{
      dispatch(enrollAction(enrollInfo));
    }

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
        element = {<Course
          courseInfo = {course}
          isAuth = {isAuth}
          isEnrolled = {enrolledCourses.includes(course.courseId)}
          profileButtonHandler={profileButtonHandler}
          handleProgressClick={handleProgressClick}
          handleSearchFunction={handleSearchFunction}
          handleRecommendedCourseClickFun={navigateToCourseFun}
          handleCourseEnrollFun={handleCourseEnrollFun}
      />}/>

      <Route
      path = {AppRoute.Progress}
      element = {
        <PrivateRoute authorizationStatus = {authStatus}>

      <Progress
        courses={progress}
        profileButtonHandler = {profileButtonHandler }
        handleProgressClick={handleProgressClick}
        handleSearchFunction={handleSearchFunction}/>
      </PrivateRoute>}/>

      <Route
      path = {AppRoute.Profile}
      element = {
        <PrivateRoute authorizationStatus={authStatus}>
          <ProfilePage
            profileButtonHandler={profileButtonHandler}
            handleProgressClick={handleProgressClick}
            handleSearchFunction={handleSearchFunction}
            handleLogoutAction = {handleLogoutAction}
            handleUserDataChangeFunction={handleUserDataChange}
            />
        </PrivateRoute>
      }/>

      <Route
      path = {AppRoute.MyCourses}
      element = {
        <PrivateRoute authorizationStatus={authStatus}>
          <MainPage
            Cources={courseList.filter((course)=> enrolledCourses.includes(course.id))}
            profileButtonHandler={profileButtonHandler}
            handleProgressClick={handleProgressClick}
            handleSearchFunction={handleSearchFunction}
            navigateToCourseFun={navigateToCourseFun}/>
        </PrivateRoute>
      }
      />
      <Route
      path = {AppRoute.Login}
      element = {
        <LoginPage
          profileButtonHandler={profileButtonHandler}
          handleProgressClick={handleProgressClick}
          handleSearchFunction={handleSearchFunction}
          handleToggle={handleToggleClick}
          handleLoginClick = {handleLoginClick}/>
      }
      />

      <Route
      path = {AppRoute.Register}
      element = {
        <Register
          profileButtonHandler={profileButtonHandler}
          handleProgressClick={handleProgressClick}
          handleSearchFunction={handleSearchFunction}
          handleRegisterClick = {handleRegisterClick}
          handleToggleClick= {handleToggleClick}/>
      }/>

      <Route
      path='*'
      element = {
        <NotFoundPage
          profileButtonHandler={profileButtonHandler}
          handleProgressClick={handleProgressClick}
          handleSearchFunction={handleSearchFunction}/>
      }
        />
    </Routes>
  );
}

export default App;
