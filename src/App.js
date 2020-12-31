import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
