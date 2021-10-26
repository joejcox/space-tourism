import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Header from "./components/Header";
import Data from "./data.js";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/crew/:crewId">
          <Crew data={Data} />
        </Route>
        <Route path="/crew">
          <Redirect to="/crew/Douglas-Hurley" />
        </Route>
        <Route path="/destination/:planetId">
          <Destination data={Data} />
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
