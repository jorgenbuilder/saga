import {
    Switch,
    SwitchProps,
    useLocation,
} from 'react-router';
import { AnimatePresence, AnimatePresenceProps } from 'framer-motion';
import { RouteConf } from 'src/constants/routes';
import { Fade } from './animated-presence';
import PrivateRoute from './private-routes';

export interface AnimatedSwitchProps extends SwitchProps, AnimatePresenceProps {
    children: React.ReactNode;
};

export function AnimatedSwitch({ exitBeforeEnter = true, initial = false, children }: AnimatedSwitchProps) {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
            <Switch location={location} key={location.pathname}>
                {children}
            </Switch>
        </AnimatePresence>
    );
};

export function AnimatedRoute({ path, exact, Component, ...rest }: RouteConf) {
    return <PrivateRoute path={path} exact={exact} {...rest} Component={Component}>
        <Fade>
            <Component />
        </Fade>
    </PrivateRoute>
};