import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import MainPage from './components/main-page/MainPage';
import "./markup/styles.css";
import { AppRoute, AuthorizationStatus } from './mocks/routes';
import SearchResults from './components/search-results/search-results';
import Course from './components/course-page/Course';
import Progress from './components/progress/Progress';
import ProfilePage from './components/profile-page/ProfilePage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LoginPage from './components/login-page/LoginPage';
import Register from './components/Register/Register';
import MockCources from './mocks/couses';
import { MockProgress } from './mocks/couses';
import MockProfile from './mocks/profile';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchCourseList } from './store/api-actions';
import { getCourse, getCourseList } from './store/selectors';
import { useEffect } from 'react';
import NotFoundPage from './components/not-found-page/not-found-page';
import LoadingPage from './components/loading-page/loading-page';

function App() {

  const courseList = useAppSelector(getCourseList);
  const course = useAppSelector(getCourse);
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
      element = {<Course courseInfo = {course} isAuth = {true} isEnrolled = {true}/>}/>

      <Route
      path = {AppRoute.Progress}
      element = {
        <PrivateRoute authorizationStatus = {AuthorizationStatus.Auth}>
      <Progress courses={MockProgress}/>
      </PrivateRoute>}/>

      <Route
      path = {AppRoute.Profile}
      element = {
        <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
          <ProfilePage />
        </PrivateRoute>
      }/>

      <Route
      path = {AppRoute.MyCourses}
      element = {
        <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
          <MainPage Cources={courseList.slice(0,3)}/>
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
