import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/app/App';
import { store } from './store/index';
import { Provider } from 'react-redux';
import { checkAuthAction, fetchCourseList, getUserInfo, getUserProgress } from './store/api-actions';
import { getToken } from './services/token';
import browserHistory from './services/browser-history';
import HistoryRouter from './components/history-router/history-router';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
store.dispatch(fetchCourseList());
store.dispatch(checkAuthAction(getToken()));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history = {browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);


