import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BottomNav() {
	let dashboardUrl = "#";

  return (
    <nav className="bottom-navbar">
    	<div className="container">
    		<ul className="nav page-navigation">
    			<li className="nav-item">
    				<a className="nav-link" href={dashboardUrl}>
    					<i className="mdi menu-icon"><FontAwesomeIcon icon={faCompass} size="xs" /></i>
    					<span className="menu-title">Dashboard</span>
    				</a>
    			</li>
    		</ul>
    	</div>
    </nav>
  );
}

export default BottomNav;