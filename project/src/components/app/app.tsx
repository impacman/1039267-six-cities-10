import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '../../pages/main';
import { MainEmpty } from '../../pages/main-empty';
import { Login } from '../../pages/login';
import { NotFound } from '../../pages/not-found';
import { FavoritesMain } from '../../pages/favorites';
import { PropertyMain } from '../../pages/property';
import { PrivatRoute } from '../privat-route';
import { AppRouters, AutorizationStatus } from '../../const';
import { Offers } from '../../types/offers';

type Props = {
  offers: Offers
}

function App({offers}: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRouters.Root}>
          <Route index element={<Main offers={offers} />} />
          <Route path={AppRouters.Demo} element={<MainEmpty />} />
          <Route path={AppRouters.Login} element={<Login />} />
          <Route path={AppRouters.Favorites} element={
            <PrivatRoute autorizationStatus={AutorizationStatus.Auth}>
              <FavoritesMain />
            </PrivatRoute>
          }
          />
          <Route path={`${AppRouters.Room}/:id`} element={<PropertyMain />} />
        </Route>
        <Route path={AppRouters.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
