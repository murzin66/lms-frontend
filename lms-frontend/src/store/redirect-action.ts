import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../mocks/routes';


export const redirectToRoute = createAction<AppRoute>('course/redirectToRoute');