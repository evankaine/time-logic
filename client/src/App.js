import './App.css';
import { Route } from "react-router-dom"
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      
      <Route path="/">
        <Home />
      </Route>

    </div>
  );
}

export default App;
