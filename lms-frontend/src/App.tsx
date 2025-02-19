import React from 'react';
import {Route, Routes} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import MainPage from './components/main-page/MainPage';
import "./markup/styles.css";
import { AppRoute } from './mocks/routes';
import SearchResults from './components/search-results/search-results';
import Course from './components/course-page/Course';
import Progress from './components/progress/Progress';
function App() {
  return (
    <Routes>
      <Route
      path={AppRoute.Main}
      element = {<MainPage/>}/>

      <Route
      path={AppRoute.Search}
      element = {<SearchResults/>}
      />

      <Route
      path={AppRoute.Course}
      element = {<Course isAuth = {true} isEnrolled = {true}/>}/>

      <Route
      path = {AppRoute.Progress}
      element = {<Progress/>}/>

    </Routes>
  );
}

export default App;
