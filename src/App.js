import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Detail from './components/Detail';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/Detail/:id">
            <Header />
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
