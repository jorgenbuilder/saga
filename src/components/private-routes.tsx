import { ReactNode, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Routes, { RouteConf } from 'src/constant/routes';
import { InternetIdentityContext } from 'src/context/internet-identity';

interface PrivateRouteProps extends RouteConf {
    children?: ReactNode;
}

export default function PrivateRoute({ path, exact, Component, requiresAuth, ...rest }: PrivateRouteProps) {
    const { isAuthed } = useContext(InternetIdentityContext);
    if (requiresAuth && !isAuthed) {
        return <Redirect to={{ pathname: Routes.auth.path, state: { referrer: path }}}  />
    }
    return <Route path={path} exact={exact} {...rest} />
}