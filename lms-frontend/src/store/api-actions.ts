import { AxiosInstance } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveToken, dropToken, getToken } from "../services/token";
import { AppDispatch, CourseType, CourseList, State, User, CourseProgress, CourseShortInfo, SearchResults } from "../types/state";
import { APIRoute } from "../mocks/api-routes";
import { AuthData } from "../types/auth-data";
import { loginType, UserData } from "../types/user-data";
import { useAppDispatch } from "../hooks";
import { redirect } from "./middlewares/redirect";
import { AppRoute } from "../mocks/routes";
import { redirectToRoute } from "./redirect-action";

export const fetchCourseList = createAsyncThunk<CourseList, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'CourseList/fetchCourseList',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<CourseList>(APIRoute.CourseList);
    return data;
  },
);


export const checkAuthAction = createAsyncThunk<string, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (token, {extra: api}) => {
    const {data:{email}} = await api.get<User>(APIRoute.CheckAuth,{params:{'X-Token':token}});
    return email;
  },
);

export const loginAction = createAsyncThunk< void, loginType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    const { data } = await api.post<UserData>(APIRoute.Login, formData);
    saveToken(data.token);
    dispatch(getUserInfo(data.email));
    dispatch(getUserProgressAction(data.id));
    dispatch(redirectToRoute(AppRoute.Profile));
  },
);

export const registerAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/register',
  async ({email, password, interests, name, surname, middlename}, {dispatch, extra: api}) => {
    const userData = {
      email,
      password,
      interests,
      name,
      surname,
      middlename
    };
    const {data} = await api.post<UserData>(APIRoute.Register, userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    saveToken(data.token);
    dispatch(checkAuthAction(getToken()));
    dispatch(getUserInfo(data.email));
    dispatch(redirectToRoute(AppRoute.Profile));
  },
);


export const fetchCourseInfo = createAsyncThunk<CourseType, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'Course/fetchCourse',
  async (id, {extra: api}) => {
    const {data} = await api.get<CourseType>(`${APIRoute.Course}/${id}`);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (token, {extra: api}) => {
    dropToken();
    await api.delete(APIRoute.Logout,{headers: {'X-Token' : token}});
  },
);

export const userUpdateInfo = createAsyncThunk<User, User,{
  dispatch: AppDispatch;
  state:State;
  extra: AxiosInstance;
}>(
  'user/updateInfo',
  async({name,surname, middlename, interests, email, photoUrl }, {extra:api})=>{
    const {data} = await api.post<User>(APIRoute.UserInfo, {name, surname, middlename, interests, email, photoUrl });
    console.log(data);
    return data;
  }
)

export const getUserProgressAction = createAsyncThunk<CourseProgress[], number,{
  dispatch: AppDispatch;
  state:State;
  extra:AxiosInstance;
}>(
  'user/progressInfo',
  async(userId, {extra:api})=> {
    const {data} = await api.get<CourseProgress[]>(`${APIRoute.Progress}/${userId}`);
    return data;
  }
)

export const getUserInfo = createAsyncThunk <User, string,{
  dispatch:AppDispatch;
  state:State;
  extra:AxiosInstance;
}>(
  'user/getUserInfo',
  async(userEmail, {extra:api})=>{
    const {data} = await api.get<User>(`${APIRoute.UserInfo}/${userEmail}`);
    return data;
  }
)

export const getSearchResult = createAsyncThunk <CourseType[],string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'search/getSearchResult',
  async(query, {extra:api}) => {
    const {data} = await api.get <CourseType[]>(`${APIRoute.Search}/${query}`);
    return data;
  }
)

export type EnrollActionType = {
  courseId: number;
  email: string;
  courseTag: string;
}
export const enrollAction = createAsyncThunk <number[],EnrollActionType,{
  dispatch:AppDispatch;
  state:State;
  extra:AxiosInstance;
}>(
  'course/enrollAction',
  async({courseId, email, courseTag},{dispatch, extra:api})=>{
    const {data:{enrolledCourses}} = await api.post<User>(APIRoute.Course,{courseId, email, courseTag});
    dispatch(getUserInfo(email));
    return enrolledCourses;
  }
)