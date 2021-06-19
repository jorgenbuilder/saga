import React from 'react';
import Index from 'screens';
import Workbench from 'screens/workbench';
import WorkbenchDraw  from 'screens/workbench/draw';
import App from 'screens/app-entry';
import RevealScreen from 'screens/reveal';
import SplashScreen from 'screens/splash';
import ChooseThemeScreen from 'screens/choose-theme';
import { AnimatedRoute, AnimatedSwitch } from 'components/animated-routes';

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
    drawSelection: {
        path: '/draw-selection',
        Component: ChooseThemeScreen
    },
    draw: {
        path: '/draw',
        Component: RevealScreen
    },
    drawGeneral: {
        path: '/draw/general',
        Component: RevealScreen
    },
    drawCareer: {
        path: '/draw/career',
        Component: RevealScreen
    },
    drawLove: {
        path: '/draw/love',
        Component: RevealScreen
    },
};

export function AppRoutes () {
    return <AnimatedSwitch>
        {Object.values(Routes).map(r => <AnimatedRoute {...r} key={r.path} />)}
    </AnimatedSwitch>;
}

export default Routes;