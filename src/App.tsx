import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import IndexScreen from './Screens/Index';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/"><IndexScreen /></Route>
      </Switch>
    </Router>
  );
};

export default App;
