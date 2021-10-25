import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Planet from "./pages/Destination/Planet";
import Header from "./components/Header";
import Data from "./data.js";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/destination/:planetId">
          <Planet data={Data} />
        </Route>
        <Route path="/destination">
          <Redirect to="/destination/moon" />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
