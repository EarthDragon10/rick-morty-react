import React, {useState, useEffect} from "react";
import {BroswerRouter as Router, Switch, Route } from "react-router-dom";
import SingleCharacter from "./Characters/Components/SIngleCharacter"
import Home from "./Home"

function App() {

  const [page, setPage] = useState(1);

  return (

    <div className="App">
      <Router>
        <Switch>
          <Route>
            
          </Route>
        </Switch>
      </Router>
    </div>

  ) 

    
}