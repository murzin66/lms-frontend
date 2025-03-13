import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { store } from './store/index';
import { Provider } from 'react-redux';
import { fetchCourseList, getUserInfo, getUserProgress } from './store/api-actions';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
store.dispatch(fetchCourseList());
store.dispatch(getUserProgress(1));
store.dispatch(getUserInfo("test@mail.ru"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


