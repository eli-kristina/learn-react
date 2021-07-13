import React from "react";
import {
	Router,
  	Route,
  	Switch
} from "react-router-dom";

import history from "../utils/history";
import Login from "./Login";
import Home from "./Home";
import Vote from "./Vote";
import Favourite from "./Favourite";

class Routes extends React.Component {
	render() {
	  	return (
	  		<div className="main-panel">
		  		<Router history={history}>
		  			<Switch>
		  				<Route path="/login">
				            <Login setUser={this.props.setUser} />
				        </Route>
				        <Route path="/votes">
				            <Vote />
				        </Route>
						<Route path="/favourites">
				            <Favourite />
				        </Route>
						<Route path="/">
				            <Home user={this.props.user} />
				        </Route>
	      			</Switch>
		  		</Router>
	  		</div>
  		);
  	}
}

export default Routes;