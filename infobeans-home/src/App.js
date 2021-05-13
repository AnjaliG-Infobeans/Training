import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
