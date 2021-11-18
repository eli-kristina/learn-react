import React from "react";
import TopNav from "../components/navbar/TopNav";
import BottomNav from "../components/navbar/BottomNav";
import Footer from "../components/footer/Index";
import Routes from "./Routes";
import { User } from "../models/User";
import { getUser, setUser, removeUser } from "../utils/session";

class App extends React.Component<{}, { user: User | undefined }> {
	constructor(props) {
		super(props);
		const getUserData = JSON.parse(getUser());
		this.state = {
			user: (Object.keys(getUserData).length === 0) ? undefined : getUserData,
			toogle: 0
		}

		this.setUser = this.setUser.bind(this)
		this.setToogle = this.setToogle.bind(this)
	}

	setUser(user: User) {
		this.setState({
			user: user
		});

		if (user === undefined) {
			removeUser();
		} else {
			setUser(JSON.stringify(user));
		}
	}

	setToogle(toogle: 0) {
		this.setState({
			toogle: toogle
		});
	}

	render() {
		return (
			<div className="container-scroller">
				<div className="horizontal-menu">
					<TopNav user={this.state.user} setToogle={this.setToogle} setUser={this.setUser} />
					<BottomNav user={this.state.user} toogle={this.state.toogle} />
				</div>
				<div className="container-fluid page-body-wrapper">
					<Routes user={this.state.user} setUser={this.setUser} />
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
