import React from "react";
import {
	BrowserRouter as Router,
  	Route,
  	Switch
} from "react-router-dom";

import history from "../utils/history";
import Login from "./Login";
import Home from "./Home";

class Routes extends React.Component {
	render() {
	  	return (
	  		<div className="main-panel">
		  		<Router history={history}>
		  			<Switch>
		  				<Route path="/login">
				            <Login setUser={this.props.setUser} />
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