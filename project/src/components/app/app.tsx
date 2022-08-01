
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
// import FavoritesEmptyScreen from '../../pages/favorites-empty-screen/favorites-empty-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
// import MainEmptyScreen from '../../pages/main-empty-screen/main-empty-screen';
// import PropertyNotLoggedScreen from '../../pages/property-not-logged-screen/property-not-logged-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivatRoute from '../privat-route/privat-route';

import {AppRouters, AutorizationStatus} from '../../const';

type AppScreenProps = {
  cards: {
    id: number,
    premium: boolean,
    img: string,
    price: number,
    rating: number,
    name: string,
    type: string,
    bookmark: boolean
  }[],
};

function App({cards}: AppScreenProps): JSX.Element {
  return (
    <>
      {/* Как сюда передавать пропсы ?????? */}
      {/* <BrowserRouter>
        {AppRouters.map(({id, path, element})=> <Route path={path} element={element} key={id} />)}
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path={AppRouters.Root}>
            <Route index element={<MainScreen cards={cards} />} />
            <Route path={AppRouters.Login} element={<LoginScreen />} />
            <Route path={AppRouters.Favorites} element={
              <PrivatRoute autorizationStatus={AutorizationStatus.NoAuth}>
                <FavoritesScreen />
              </PrivatRoute>
            }
            />
            {/* <Route path={AppRouters.Room}>
              <Route index element={<PropertyScreen />} />
              <Route path=':id' element={<PropertyScreen />} />
            </Route> */}
            <Route path={`${AppRouters.Room}/:id`} element={<PropertyScreen />} />
          </Route>
          <Route path={AppRouters.NotFound} element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>


      {/* <MainScreen cards={cards} /> */}
      {/* <FavoritesEmptyScreen /> */}
      {/* <FavoritesScreen /> */}
      {/* <LoginScreen /> */}
      {/* <MainEmptyScreen /> */}
      {/* <PropertyNotLoggedScreen /> */}
      {/* <PropertyScreen /> */}
    </>
  );
}

export default App;
