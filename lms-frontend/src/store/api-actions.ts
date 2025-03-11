import { AxiosInstance } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveToken, dropToken, getToken } from "../services/token";
import { AppDispatch, CourseType, CourseList, State, User } from "../types/state";
import { APIRoute } from "../mocks/api-routes";
import { AuthData } from "../types/auth-data";
import { UserData } from "../types/user-data";

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
  'User/checkAuth',
  async (token, {extra: api}) => {
    const {data:{name}} = await api.get<User>(APIRoute.Login,{params:{'X-Token':token}});
    return name;
  },
);


export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(checkAuthAction(getToken()));
  },
);

export const fetchCourseInfo = createAsyncThunk<CourseType, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'Course/fetchCourse',
  async (id, {extra: api}) => {
    console.log("fetch course");
    const {data} = await api.get<CourseType>(`${APIRoute.Course}/${id}`);
    console.log(data);
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
    await api.delete(APIRoute.Logout,
      {headers: {'X-Token' : token}});
  },
);

export const userUpdateInfo = createAsyncThunk<User, User,{
  dispatch: AppDispatch;
  state:State;
  extra: AxiosInstance;
}>(
  'user/updateInfo',
  async({name,surname, middlename, interests, email, photoUrl }, {extra:api})=>{
    const {data} = await api.post<User>(APIRoute.UserInfo, {params:{name, surname, middlename, interests, email, photoUrl }});
    return data;
  }
)