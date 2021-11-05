import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <Home></Home>
          </Route>
          <Route path="/users">
            <Home></Home>
          </Route>
          <Route path="/appoinment">
            <Appoinment></Appoinment>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
