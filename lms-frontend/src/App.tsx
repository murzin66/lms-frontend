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
import LoginPage from './components/Login-page/LoginPage';
import Register from './components/Register/Register';
import MockCources from './mocks/couses';
import { MockProgress } from './mocks/couses';
import MockProfile from './mocks/profile';
function App() {
  return (
    <Routes>
      <Route
      path={AppRoute.Main}
      element = {<MainPage Cources={MockCources}/>}/>

      <Route
      path={AppRoute.Search}
      element = {<SearchResults/>}
      />

      <Route
      path={AppRoute.Course}
      element = {<Course isAuth = {true} isEnrolled = {true}/>}/>

      <Route
      path = {AppRoute.Progress}
      element = {<Progress courses={MockProgress}/>}/>

      <Route
      path = {AppRoute.Profile}
      element = {
        <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
          <ProfilePage {...MockProfile}/>
        </PrivateRoute>
      }/>

      <Route
      path = {AppRoute.MyCourses}
      element = {
        <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
          <MainPage Cources={MockCources.slice(0,3)}/>
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
      path = {AppRoute.Course}
      element = {
        <Course isAuth={false} isEnrolled={false}/>
      }/>
    </Routes>
  );
}

export default App;
