import {
    Route,
    Switch,
    SwitchProps,
    useLocation,
} from 'react-router';
import { AnimatePresence, AnimatePresenceProps } from 'framer-motion';
import { RouteConf } from 'src/constant/routes';
import { Fade } from './animated-presence';

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

export interface AnimatedRouteProps extends RouteConf {};

export function AnimatedRoute({ path, exact, Component, ...rest }: AnimatedRouteProps) {
    return <Route path={path} exact={exact} {...rest}>
        <Fade>
            <Component />
        </Fade>
    </Route>
};