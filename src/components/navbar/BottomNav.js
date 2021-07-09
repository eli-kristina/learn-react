import React from "react";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BottomNav extends React.Component {
    render() {
      let dashboardUrl = "/";

      return (
        <nav className="bottom-navbar">
        	<div className="container">
        		<ul className="nav page-navigation">
        			<li className="nav-item">
        				<a className="nav-link" href={dashboardUrl}>
        					<i className="mdi menu-icon"><FontAwesomeIcon icon={faCompass} size="xs" /></i>
        					<span className="menu-title">Home</span>
        				</a>
        			</li>
        		</ul>
        	</div>
        </nav>
      );
  }
}

export default BottomNav;