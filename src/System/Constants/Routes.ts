import React from 'react';
import Index from '../../Screens/Index';
import Workbench from '../../Screens/Workbench';
import WorkbenchStaticRotation from '../../Screens/Workbench/StaticRotation';
import WorkbenchCardReveal from '../../Screens/Workbench/CardReveal';
import WorkbenchShuffleDeck from '../../Screens/Workbench/ShuffleDeck';
import WorkbenchSvgCard from '../../Screens/Workbench/SvgCard';
import App from '../../Screens/App';
import DrawScreen from '../../Screens/App/DrawScreen';
import SplashScreen from '../../Screens/App/Splash';
import ThreeOnClickWorkbench from '../../Screens/Workbench/ThreeOnClick';

const Routes: {
    [key: string]: {
        path: string;
        component: React.FC;
        exact?: boolean;
    };
} = {
    index: {
        path: '/',
        component: Index,
        exact: true,
    },
    workbench: {
        path: '/workbench',
        component: Workbench,
        exact: true,
    },
    workbenchStaticRotation: {
        path: '/workbench/static-rotation',
        component: WorkbenchStaticRotation,
    },
    workbenchCardReveal: {
        path: '/workbench/card-reveal',
        component: WorkbenchCardReveal,
    },
    workbenchShuffleDeck: {
        path: '/workbench/shuffle-deck',
        component: WorkbenchShuffleDeck,
    },
    workbenchSvgCard: {
        path: '/workbench/three-svg',
        component: WorkbenchSvgCard,
    },
    workbenchSplash: {
        path: '/workbench/splash',
        component: SplashScreen,
    },
    workbenchThreeOnClick: {
        path: '/workbench/three-on-click',
        component: ThreeOnClickWorkbench,
    },
    app: {
        path: '/app',
        component: App,
    },
    draw: {
        path: '/draw',
        component: DrawScreen
    }
};

export default Routes;