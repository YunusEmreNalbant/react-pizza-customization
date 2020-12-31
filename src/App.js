import React from 'react';
import Header from "./components/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Checkout from "./components/Checkout";
import Customize from "./components/Customize";
function App() {
  return (
    <div className="App">
      <Header/>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Customize/>
                    </Route>
                    <Route path="/checkout">
                        <Checkout/>
                    </Route>

                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
