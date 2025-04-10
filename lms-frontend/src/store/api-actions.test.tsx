import { createAPI } from '../services/api';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import { datatype, internet } from 'faker';
import MockAdapter from 'axios-mock-adapter';

import {AppThunkDispatch, extractActionsTypes} from '../utils/mocs';
import { APIRoute } from '../mocks/api-routes';
import { checkAuthAction, enrollAction, fetchCourseInfo, fetchCourseList, getSearchResult, getUserInfo, getUserProgressAction, loginAction, logoutAction, registerAction, userUpdateInfo } from './api-actions';
import { State } from '../types/state';
import { mockUser, mockCourseList, mockCourse, mockSearch} from '../mocks/mock-store';
import { redirectToRoute } from './redirect-action';
import * as tokenStorage from '../services/token';
import { vi } from 'vitest';


describe('Async actions',()=>{
  const axios = createAPI();
  const mockAxios = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;
  beforeEach(() => {
    store = mockStoreCreator({ User: mockUser, Course: mockCourse, CourseList: mockCourseList, SearchResults: mockSearch});
  });
  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" when server response 200', async () => {
      const fakeToken = datatype.uuid();
      const expectedEmail = datatype.string();
      const expectedPayload = { email: expectedEmail };

      mockAxios.onGet(APIRoute.CheckAuth).reply(200, expectedPayload);

      await store.dispatch(checkAuthAction(fakeToken));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const checkAuthActionFulfilled = emittedActions.at(1) as ReturnType<typeof checkAuthAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
      expect(checkAuthActionFulfilled.payload)
        .toEqual(expectedEmail);
    });



    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async() => {
      mockAxios.onGet(APIRoute.CheckAuth).reply(401);

      await store.dispatch(checkAuthAction(datatype.string()));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  it('should dispatch correct actions when loginAction is fulfilled', async () => {
    const expectedPayload = datatype.string();
    const email = internet.email();
    const password = internet.password();

    mockAxios.onPost(APIRoute.Login).reply(200, expectedPayload);

    await store.dispatch(loginAction({email, password}));

    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      loginAction.pending.type,
      getUserInfo.pending.type,
      getUserProgressAction.pending.type,
      redirectToRoute.type,
      loginAction.fulfilled.type,
    ]);
  });

    it('should dispatch "loginAction.pending" and "loginAction.rejected" when server response 400', async() => {
      const email = internet.email();
      const password = internet.password();
      mockAxios.onPost(APIRoute.Login).reply(400);

      await store.dispatch(loginAction({email, password}));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.rejected.type,
      ]);
    });
    it('should call "saveToken" once with the received token', async () => {
      const email = internet.email();
      const password = internet.password();
      const fakeServerReplay = { token: 'secret' };
      mockAxios.onPost(APIRoute.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction({email, password}));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });
  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async() => {
      mockAxios.onDelete(APIRoute.Logout).reply(204);
      const tokenMock = datatype.string();

      await store.dispatch(logoutAction(tokenMock));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should one call "dropToken" with "logoutAction"', async () => {
      mockAxios.onDelete(APIRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');
      const tokenMock = datatype.string();

      await store.dispatch(logoutAction(tokenMock));

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });
  it('should dispatch "logoutAction.pending", "logoutAction.rejected" when server response 400', async() => {
    mockAxios.onDelete(APIRoute.Logout).reply(400);
    const tokenMock = datatype.string();

    await store.dispatch(logoutAction(tokenMock));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.rejected.type,
    ]);
  })})

  describe('Async actions', () => {
    const axios = createAPI();
    const mockAxios = new MockAdapter(axios);
    const middleware = [thunk.withExtraArgument(axios)];
    const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
    let store: ReturnType<typeof mockStoreCreator>;

    beforeEach(() => {
      store = mockStoreCreator({ User: mockUser, Course: mockCourse, CourseList: mockCourseList, SearchResults: mockSearch });
    });

    describe('fetchCourseList', () => {
      it('should dispatch fetchCourseList.pending and fetchCourseList.fulfilled on success', async () => {
        mockAxios.onGet(APIRoute.CourseList).reply(200, mockCourseList);

        await store.dispatch(fetchCourseList());

        const actions = extractActionsTypes(store.getActions());
        expect(actions).toEqual([
          fetchCourseList.pending.type,
          fetchCourseList.fulfilled.type,
        ]);
      });

      it('should dispatch fetchCourseList.pending and fetchCourseList.rejected on error', async () => {
        mockAxios.onGet(APIRoute.CourseList).reply(500);

        await store.dispatch(fetchCourseList());

        const actions = extractActionsTypes(store.getActions());
        expect(actions).toEqual([
          fetchCourseList.pending.type,
          fetchCourseList.rejected.type,
        ]);
      });
    });

    describe('fetchCourseInfo', () => {
      it('should dispatch fetchCourseInfo.pending and fetchCourseInfo.fulfilled on success', async () => {
        const courseId = datatype.number();
        mockAxios.onGet(`${APIRoute.Course}/${courseId}`).reply(200, mockCourse);

        await store.dispatch(fetchCourseInfo(courseId));

        const actions = extractActionsTypes(store.getActions());
        expect(actions).toEqual([
          fetchCourseInfo.pending.type,
          fetchCourseInfo.fulfilled.type,
        ]);
      });
    });

    describe('getUserInfo', () => {
      it('should dispatch getUserInfo.pending and getUserInfo.fulfilled on success', async () => {
        const email = internet.email();
        mockAxios.onGet(`${APIRoute.UserInfo}/${email}`).reply(200, mockUser);

        await store.dispatch(getUserInfo(email));

        const actions = extractActionsTypes(store.getActions());
        expect(actions).toEqual([
          getUserInfo.pending.type,
          getUserInfo.fulfilled.type,
        ]);
      });
    });

    describe('getUserProgressAction', () => {
      it('should dispatch getUserProgressAction.pending and getUserProgressAction.fulfilled on success', async () => {
        const userId = datatype.number();
        mockAxios.onGet(`${APIRoute.Progress}/${userId}`).reply(200, []);

        await store.dispatch(getUserProgressAction(userId));

        const actions = extractActionsTypes(store.getActions());
        expect(actions).toEqual([
          getUserProgressAction.pending.type,
          getUserProgressAction.fulfilled.type,
        ]);
      });
    });

    describe('getSearchResult', () => {
      it('should dispatch getSearchResult.pending and getSearchResult.fulfilled on success', async () => {
        const query = datatype.string();
        mockAxios.onGet(`${APIRoute.Search}/${query}`).reply(200, []);

        await store.dispatch(getSearchResult(query));

        const actions = extractActionsTypes(store.getActions());
        expect(actions).toEqual([
          getSearchResult.pending.type,
          getSearchResult.fulfilled.type,
        ]);
      });
    });

    describe('userUpdateInfo', () => {
      it('should dispatch userUpdateInfo.pending and userUpdateInfo.fulfilled on success', async () => {
        mockAxios.onPost(APIRoute.UserInfo).reply(200, mockUser);

        await store.dispatch(userUpdateInfo(mockUser));

        const actions = extractActionsTypes(store.getActions());
        expect(actions).toEqual([
          userUpdateInfo.pending.type,
          userUpdateInfo.fulfilled.type,
        ]);
      });
    });

    describe('registerAction', () => {
      it('should dispatch registerAction.pending and registerAction.fulfilled on success', async () => {
        const fakeToken = datatype.uuid();
        const registerData = {
          login: "",
          email: internet.email(),
          password: internet.password(),
          interests: "",
          name: 'Test',
          surname: 'User',
          middlename: 'Middle',
        };

        mockAxios.onPost(APIRoute.Register).reply(200, { token: fakeToken, email: registerData.email, id: 1 });

        const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

        await store.dispatch(registerAction(registerData));

        expect(mockSaveToken).toBeCalledWith(fakeToken);
      });
    });

    describe('enrollAction', () => {
      it('should dispatch enrollAction.pending and enrollAction.fulfilled on success', async () => {
        const enrollData = {
          courseId: 1,
          email: internet.email(),
          courseTag: datatype.string(),
        };

        mockAxios.onPost(APIRoute.Course).reply(200, { enrolledCourses: [1, 2, 3] });

        await store.dispatch(enrollAction(enrollData));

        const actions = extractActionsTypes(store.getActions());
        expect(actions).toEqual([
          enrollAction.pending.type,
          getUserInfo.pending.type,
          enrollAction.fulfilled.type,
        ]);
      });
    });
  });