import {PayloadAction} from '@reduxjs/toolkit';
import {Middleware} from 'redux';

import browserHistory from '../../services/browser-history';
import {rootReducer} from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: unknown) => {
        if (typeof action === 'object' && action !== null && 'type' in action && 'payload' in action) {
          const payloadAction = action as PayloadAction<string>;
          if (payloadAction.type === 'course/redirectToRoute') {
            browserHistory.push(payloadAction.payload);
          }
        }

        return next(action);
      };