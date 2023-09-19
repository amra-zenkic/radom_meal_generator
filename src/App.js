import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Meal from './Meal';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>  
            <Route path={'/meal'}>
              <Meal />
            </Route>  
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
