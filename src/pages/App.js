import React from "react";
import TopNav from "../components/navbar/TopNav";
import BottomNav from "../components/navbar/BottomNav";
import Routes from "./Routes";

class App extends React.Component {
	render() {
	  return (
	    <div className="container-scroller">
	    	<div className="horizontal-menu">
	    		<TopNav/>
	    		<BottomNav/>
	    	</div>
	    	<div className="container-fluid page-body-wrapper">
	    		<Routes />
	    	</div>
	    </div>
	  );
	}
}

export default App;
