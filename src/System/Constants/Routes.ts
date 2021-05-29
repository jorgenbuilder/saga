import React from 'react';
import Index from '../../Screens/Index';
import Workbench from '../../Screens/Workbench';
import WorkbenchStaticRotation from '../../Screens/Workbench/StaticRotation';
import WorkbenchCardReveal from '../../Screens/Workbench/CardReveal';
import WorkbenchShuffleDeck from '../../Screens/Workbench/ShuffleDeck';
import WorkbenchSvgCard from '../../Screens/Workbench/SvgCard';
import WorkbenchDraw  from '../../Screens/Workbench/Draw';
import App from '../../Screens/App';
import DrawDetailScreen from '../../Screens/App/DrawDetailScreen';
import SplashScreen from '../../Screens/App/Splash';
import ThreeOnClickWorkbench from '../../Screens/Workbench/ThreeOnClick';
import TiltWorkbench from '../../Screens/Workbench/Tilt';
import WorkbenchDrawExtrude from '../../Screens/Workbench/DrawExtrude';
import DrawSelectionScreen from '../../Screens/App/DrawSelection';

const Routes: {
    [key: string]: {
        path: string;
        Component: React.FC;
        exact?: boolean;
    };
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
    workbenchStaticRotation: {
        path: '/workbench/static-rotation',
        Component: WorkbenchStaticRotation,
    },
    workbenchCardReveal: {
        path: '/workbench/card-reveal',
        Component: WorkbenchCardReveal,
    },
    workbenchShuffleDeck: {
        path: '/workbench/shuffle-deck',
        Component: WorkbenchShuffleDeck,
    },
    workbenchSvgCard: {
        path: '/workbench/three-svg',
        Component: WorkbenchSvgCard,
    },
    workbenchDraw: {
        path: '/workbench/three-draw',
        Component: WorkbenchDraw,
    },
    workbenchDrawExtrude: {
        path: '/workbench/three-draw-extrude',
        Component: WorkbenchDrawExtrude,
    },
    workbenchSplash: {
        path: '/workbench/splash',
        Component: SplashScreen,
    },
    workbenchThreeOnClick: {
        path: '/workbench/three-on-click',
        Component: ThreeOnClickWorkbench,
    },
    workbenchTilt: {
        path: '/workbench/tilt',
        Component: TiltWorkbench,
    },
    app: {
        path: '/app',
        Component: App,
    },
    drawSelection: {
        path: '/draw-selection',
        Component: DrawSelectionScreen
    },
    draw: {
        path: '/draw',
        Component: DrawDetailScreen
    }
};

export default Routes;