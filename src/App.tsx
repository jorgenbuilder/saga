import { AnimatePresence } from 'framer-motion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Routes from './System/Constants/Routes';
import Fade from './Atoms/Animations/Fade';
import DeviceAccelerometerProvider from './Providers/DeviceAccelerometer';
import '@fontsource/noto-sans-jp';
import '@fontsource/abril-fatface';

const App: React.FC = () => {
  const routes = Object.keys(Routes).map(route => {
    const RouteConf = Routes[route];
    return <Route path={RouteConf.path} exact={RouteConf.exact} key={route}>
      <Fade>
        <RouteConf.Component />
      </Fade>
    </Route>
  });
  return (
    <Router>
      <DeviceAccelerometerProvider>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            {routes}
            <Route path="*">Nothing here!</Route>
          </Switch>
        </AnimatePresence>
      </DeviceAccelerometerProvider>
    </Router>
  );
};

export default App;
