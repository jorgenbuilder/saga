import React from 'react';
import Index from '../../Screens/Index';
import Workbench from '../../Screens/Workbench';
import WorkbenchStaticRotation from '../../Screens/Workbench/StaticRotation';
import WorkbenchCardReveal from '../../Screens/Workbench/CardReveal';
import WorkbenchShuffleDeck from '../../Screens/Workbench/ShuffleDeck';

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
};

export default Routes;