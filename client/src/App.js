import './App.css';
import { Route } from "react-router-dom"
import NavBar from './NavBar/NavBar';
import Counter from "./Counter/Counter"
import Clock from './WorldClock/Clock'
import Stopwatch from './Stopwatch/Stopwatch';
import Timer from './Timer/Timer';


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Route exact path="/">
        <Clock />
      </Route>

      <Route exact path="/counter">
        <Counter />
      </Route>

      <Route exact path="/timer">
        <Timer />
      </Route>

      <Route exact path="/stopwatch">
        <Stopwatch />
      </Route>

    </div>
  );
}

export default App;
