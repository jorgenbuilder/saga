import React from 'react';
import Index from '../../Screens/Index';
import WorkBench from '../../Screens/Workbench';
import WorkBenchStaticRotation from '../../Screens/Workbench/StaticRotation';
import WorkBenchCardReveal from '../../Screens/Workbench/CardReveal';

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
        component: WorkBench,
        exact: true,
    },
    workbenchStaticRotation: {
        path: '/workbench/static-rotation',
        component: WorkBenchStaticRotation,
    },
    workbenchCardReveal: {
        path: '/workbench/card-reveal',
        component: WorkBenchCardReveal,
    },
};

export default Routes;