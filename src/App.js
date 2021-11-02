import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/about">
            <Home></Home>
          </Route>
          <Route path="/users">
            <Home></Home>
          </Route>
          <Route path="/">
            <Home></Home>

          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
