
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home/Home";
import 'antd/dist/antd.css';
import TalkToAstrologer from "./containers/TalkToAstrologer/TalkToAstrologer";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/talk-to-astrologer">
            <TalkToAstrologer>
              
            </TalkToAstrologer>
          </Route>
          <Route path="/">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
