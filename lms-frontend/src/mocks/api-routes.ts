export enum APIRoute {
  CourseList = '/',
  Course = '/course',
  UserInfo = '/user/{userId}',
  Progress = '/progress/{userId}',
  Login = '/login',
  Logout = '/logout'
}

export const TIMEOUT_SHOW_ERROR = 2000;