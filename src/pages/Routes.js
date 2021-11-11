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
import Product from "./Product";
import Faq from "./Faq";
import OrderHistory from "./OrderHistory";

class Routes extends React.Component {
	render() {
		return (
			<div className="main-panel">
				<Router history={history}>
					<Switch>
						<Route
							exact path="/order"
							component={OrderHistory}
						/>
						<Route path="/login">
							<Login setUser={this.props.setUser} />
						</Route>
						<Route
							exact path="/shop"
							component={Shop}
						/>
						<Route
							exact path="/product/:id"
							component={Product}
						/>
						<Route
							exact path="/faq"
							component={Faq}
						/>
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