import { ReactNode } from 'react';
import {
    Route,
    RouteProps,
    Switch,
    SwitchProps,
    useLocation,
} from 'react-router';
import { AnimatePresence, AnimatePresenceProps } from 'framer-motion';
import Fade from './Fade';

export interface AnimatedSwitchProps extends SwitchProps, AnimatePresenceProps {
    children: React.ReactNode;
};

export function AnimatedSwitch ({exitBeforeEnter = true, initial = false, children}: AnimatedSwitchProps) {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
            <Switch location={location} key={location.pathname}>
                {children}
            </Switch>
        </AnimatePresence>
    );
};

export interface AnimatedRouteProps extends RouteProps {
    children: ReactNode;
};

export function AnimatedRoute ({path, exact, component, children}: RouteProps) {
    console.log('Hello?', path, exact, component)
    const Component = component;
    return (
        <Route path={path} exact={exact}>
            <Fade>
                {/* @ts-ignore */}
                <Component />
            </Fade>
        </Route>
    );
};