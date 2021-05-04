import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Login />
      <Home />
    </div>
  );
}

export default App;
