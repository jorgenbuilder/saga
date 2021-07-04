import { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import { RouteConf } from 'src/constants/routes';
import { useInternetIdentity } from 'src/context/internet-identity';
import AuthScreen from 'src/screens/auth';

interface PrivateRouteProps extends RouteConf {
    children?: ReactNode;
}

export default function PrivateRoute({ path, exact, Component, requiresAuth, ...rest }: PrivateRouteProps) {
    const { isAuthed } = useInternetIdentity();
    if (requiresAuth && !isAuthed && !window.location.host.includes('localhost')) {
        return <AuthScreen />
    }
    return <Route path={path} exact={exact} {...rest} />
}