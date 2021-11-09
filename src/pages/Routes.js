import React from "react";
import {
	Router,
	Route,
	Switch
} from "react-router-dom";

import history from "../utils/history";
import Login from "./Login";
import Home from "./Home";
import Shop from "./Shop";
import Faq from "./Faq";

class Routes extends React.Component {
	render() {
		return (
			<div className="main-panel">
				<Router history={history}>
					<Switch>
						<Route path="/login">
							<Login setUser={this.props.setUser} />
						</Route>
						<Route path="/shop">
							<Shop />
						</Route>
						<Route path="/faq">
							<Faq />
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