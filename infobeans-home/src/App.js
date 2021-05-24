import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Form from "./components/Form";
import Submissions from "./components/Submissions";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/form" component={Form} />
          <Route path="/submissions" component={Submissions} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
