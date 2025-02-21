export enum AppRoute {
  Main = '/',
  Course = '/course/:id',
  Progress = '/progress',
  Login = '/login',
  Search = '/search',
  Profile = '/profile',
  Register = '/register'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}