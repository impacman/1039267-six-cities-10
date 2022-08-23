import { Navigate } from 'react-router-dom';
import { AppRouters, AutorizationStatus } from '../../const';

type PrivatRouteProps = {
  autorizationStatus: AutorizationStatus,
  children: JSX.Element
}

const PrivatRoute = ({autorizationStatus, children}: PrivatRouteProps): JSX.Element => (
  autorizationStatus === AutorizationStatus.Auth
    ? children
    : <Navigate to={AppRouters.Login} />
);

export { PrivatRoute };
