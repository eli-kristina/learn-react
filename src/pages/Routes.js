import React from "react";
import {
	BrowserRouter as Router,
  	Route,
  	Switch
} from "react-router-dom";

import Login from "./Login";
import Home from "./Home";

class Routes extends React.Component {
	render() {
	  	return (
	  		<div className="main-panel">
		  		<Router>
		  			<Switch>
		  				<Route path="/login">
				            <Login />
				        </Route>
				        <Route path="/">
				            <Home />
				        </Route>
	      			</Switch>
		  		</Router>
	  		</div>
  		);
  	}
}

export default Routes;