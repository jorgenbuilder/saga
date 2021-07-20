import { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import { RouteConf } from 'src/constants/routes';
import { useInternetIdentity } from 'src/context/internet-identity';
import AuthScreen from 'src/screens/auth';

// const DEVMODE = window.location.host.includes('localhost');
const DEVMODE = true;

interface PrivateRouteProps extends RouteConf {
    children?: ReactNode;
}

export default function PrivateRoute({ path, exact, Component, requiresAuth, ...rest }: PrivateRouteProps) {
    const { isAuthed } = useInternetIdentity();
    if (requiresAuth && !isAuthed && !DEVMODE) {
        return <AuthScreen />
    }
    return <Route path={path} exact={exact} {...rest} />
}
