import { AnimatePresence } from 'framer-motion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Routes from './System/Constants/Routes';
import Fade from './Atoms/Animations/Fade';

const App: React.FC = () => {
  const routes = Object.keys(Routes).map(route => {
    const RouteConf = Routes[route];
    return <Route path={RouteConf.path} exact={RouteConf.exact} key={route}>
      <Fade>
        <RouteConf.component />
      </Fade>
    </Route>
  });
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          {routes}
          <Route path="*">Nothing here!</Route>
        </Switch>
      </AnimatePresence>
    </Router>
  );
};

export default App;
