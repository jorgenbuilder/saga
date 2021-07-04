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
    requiresAuth?: boolean;
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
        requiresAuth: true,
    },
    auth: {
        path: '/auth',
        Component: AuthScreen,
    },
    drawSelection: {
        path: '/draw-selection',
        Component: ChooseThemeScreen,
        requiresAuth: true,
    },
    drawGeneral: {
        path: '/draw/general',
        Component: RevealScreen,
        requiresAuth: true,
    },
    drawCareer: {
        path: '/draw/career',
        Component: RevealScreen,
        requiresAuth: true,
    },
    drawLove: {
        path: '/draw/love',
        Component: RevealScreen,
        requiresAuth: true,
    },
    draw: {
        path: '/draw',
        Component: RevealScreen,
        requiresAuth: true,
    },
};

export function AppRoutes () {
    return <AnimatedSwitch>
        {Object.values(Routes).map(r => <AnimatedRoute {...r} key={r.path} />)}
    </AnimatedSwitch>;
}

export default Routes;