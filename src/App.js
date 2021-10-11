import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleCharacter from "./SIngleCharacter"
import Home from "./Home"

function App() {

  const [page, setPage] = useState(1);

  return (

    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="./">
              <Home page={page} setPage={setPage} />
            </Route>
            <Route path="single-character">
              <SingleCharacter />
            </Route>
          </Switch>
        </div>
        
      </Router>
    </div>

  ) 

    
}

export default App;