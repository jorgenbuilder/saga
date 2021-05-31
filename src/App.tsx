import { AnimatePresence } from 'framer-motion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import Routes from './System/Constants/Routes';
import Fade from './Atoms/Animation/Fade';
import DeviceAccelerometerProvider from './Providers/DeviceAccelerometer';
import '@fontsource/noto-sans-jp';
import '@fontsource/abril-fatface';
import React from 'react';
import { AnimatedSwitch } from './Atoms/Animation/Routes';

const App: React.FC = () => {
  const location = useLocation();
  const routes = Object.keys(Routes).map(route => {
    const RouteConf = Routes[route];
    return <Route path={RouteConf.path} exact={RouteConf.exact}>
      <Fade>
        <RouteConf.Component />
      </Fade>
    </Route>
  });
  return (
    <DeviceAccelerometerProvider>
      <AnimatedSwitch>
          {routes}
          <Route path="*">Nothing here!</Route>
      </AnimatedSwitch>
    </DeviceAccelerometerProvider>
  );
};

export default function AppRouter () {
  return (
    <Router>
      <App />
    </Router>
  );
}
