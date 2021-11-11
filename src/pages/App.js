import React from "react";
import TopNav from "../components/navbar/TopNav";
import BottomNav from "../components/navbar/BottomNav";
import Footer from "../components/footer/Index";
import Routes from "./Routes";
import { User } from "../models/User";

class App extends React.Component<{}, { user: User | undefined }> {
	constructor(props) {
		super(props);

		this.state = {
			user: undefined,
			toogle: 0
		}

		this.setUser = this.setUser.bind(this)
		this.setToogle = this.setToogle.bind(this)
	}

	setUser(user: User) {
		this.setState({
			user: user
		});
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
					<TopNav user={this.state.user} setToogle={this.setToogle} />
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
