// import MainScreen from './pages/main-screen/main-screen';
// import LoginScreen from './pages/login-screen/login-screen';
// import FavoritesScreen from './pages/favorites-screen/favorites-screen';
// import NotFoundScreen from './pages/not-found-screen/not-found-screen';

// export const AppRouters = [
//   {id: 1, path: '/', element: MainScreen},
//   {id: 2, path: '/login', element: LoginScreen},
//   {id: 3, path: '/favorites', element: FavoritesScreen},
//   {id: 4, path: '/not-found', element: NotFoundScreen},
// ];

export enum AppRouters {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  NotFound = '*',
}

export enum AutorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknow = 'UNKNOW'
}
