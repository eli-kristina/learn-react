import React from "react";
import TopNav from "../components/navbar/TopNav";
import BottomNav from "../components/navbar/BottomNav";
import Routes from "./Routes";
import { User } from "../models/User";

class App extends React.Component<{}, { user: User | undefined }> {
	constructor(props) {
		super(props);

		this.state = {
			user: undefined
		}

		this.setUser = this.setUser.bind(this)
	}

	setUser(user: User) { 
		this.setState({
			user: user
		});
	}

	render() {
	  return (
	    <div className="container-scroller">
	    	<div className="horizontal-menu">
	    		<TopNav user={this.state.user}/>
	    		<BottomNav user={this.state.user}/>
	    	</div>
	    	<div className="container-fluid page-body-wrapper">
	    		<Routes setUser={this.setUser} />
	    	</div>
	    </div>
	  );
	}
}

export default App;
