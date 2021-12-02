
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home"
import Navbar from "./components/navbar"
import Priceview from "./pages/priceview"
import Matchview from "./pages/matchview"
import Subscribeunsubscribe from "./pages/subscribeunsubscribe"
import Systemstatus from "./pages/systemstatus"

const App=()=> {
  return (
    <div className="App">
      <header className="App-header ">
       <Router>
       <Navbar />
       <Switch>
         <Route path="/" exact component={Home} />
          <Route path="/priceview" component={Priceview} />
          <Route path="/matchview" component={Matchview} />
          <Route path="/subscribeunsubscribe" component={Subscribeunsubscribe} />
          <Route path="/systemstatus" component={Systemstatus} />
       </Switch>
       </Router>
      </header>
    </div>
  );
}

export default App;
