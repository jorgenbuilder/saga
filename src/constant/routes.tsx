import React from 'react';
import Index from 'src/screens';
import Workbench from 'src/screens/workbench';
import WorkbenchDraw  from 'src/screens/workbench/draw';
import App from 'src/screens/app-entry';
import RevealScreen from 'src/screens/reveal';
import SplashScreen from 'src/screens/splash';
import ChooseThemeScreen from 'src/screens/choose-theme';
import AuthScreen from 'src/screens/auth';
import { AnimatedRoute, AnimatedSwitch } from 'src/components/animated-routes';

export interface RouteConf {
    path: string;
    Component: React.FC;
    exact?: boolean;
}

const Routes: {
    [key: string]: RouteConf;
} = {
    index: {
        path: '/',
        Component: Index,
        exact: true,
    },
    workbench: {
        path: '/workbench',
        Component: Workbench,
        exact: true,
    },
    workbenchDraw: {
        path: '/workbench/three-draw',
        Component: WorkbenchDraw,
    },
    workbenchSplash: {
        path: '/workbench/splash',
        Component: SplashScreen,
    },
    app: {
        path: '/app',
        Component: App,
    },
    auth: {
        path: '/auth',
        Component: AuthScreen,
    },
    drawSelection: {
        path: '/draw-selection',
        Component: ChooseThemeScreen,
    },
    draw: {
        path: '/draw',
        Component: RevealScreen,
    },
    drawGeneral: {
        path: '/draw/general',
        Component: RevealScreen,
    },
    drawCareer: {
        path: '/draw/career',
        Component: RevealScreen,
    },
    drawLove: {
        path: '/draw/love',
        Component: RevealScreen,
    },
};

export function AppRoutes () {
    return <AnimatedSwitch>
        {Object.values(Routes).map(r => <AnimatedRoute {...r} key={r.path} />)}
    </AnimatedSwitch>;
}

export default Routes;