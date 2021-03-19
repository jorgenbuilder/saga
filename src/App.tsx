import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Routes from './System/Constants/Routes';

const App: React.FC = () => {
  const routes = Object.keys(Routes).map(route => {
    const RouteConf = Routes[route];
    return <Route path={RouteConf.path} exact={RouteConf.exact} key={route}><RouteConf.component /></Route>
  });
  return (
    <Router>
      <Switch>
        {routes}
        <Route path="*">Nothing here!</Route>
      </Switch>
    </Router>
  );
};

export default App;
