import React from "react";
import { faBars, faChevronDown, faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/img/logo.svg";
import LogoMini from "../../assets/img/logo-mini.svg";
import { User } from "../../models/User";

interface TopNavProps {
	user: User | undefined,
	setToogle:(toogle: 0) => void
}

interface TopNavState {
	showDropdown: string,
	showToogle: boolean
}

class TopNav extends React.Component<TopNavProps, TopNavState> {
	constructor(props) {
		super(props);

		this.state = {
			showDropdown: 'dropdown-menu navbar-dropdown',
			showToogle: false
		}
		
		this.toogleMenu.bind(this);
	}
	
	toogleMenu(event) {
		event.preventDefault();
		
		if (this.state.showDropdown === 'dropdown-menu navbar-dropdown') {
			this.setState({showDropdown: 'dropdown-menu navbar-dropdown show'})
		} else {
			this.setState({showDropdown: 'dropdown-menu navbar-dropdown'})
		}
	}
	
	toogleMobile(event) {
		event.preventDefault();
		
		if (this.state.showToogle) {
			this.setState({showToogle: false});
			this.props.setToogle(0);
		} else {
			this.setState({showToogle: true});
			this.props.setToogle(1);
		}
	}
	
	render() {
		let indexUrl = "/";
		let loginNav;
	
		if (this.props.user === undefined) {
		  loginNav = <li className="nav-item nav-profile dropdown">
					  <a className="nav-link" href="/login">
						<div className="nav-profile-text">
						  <p className="text-black font-weight-semibold m-0"><FontAwesomeIcon icon={faSignInAlt} /> LOGIN </p>
						</div>
					  </a>
					</li>
		} else {
		  loginNav = <li className="nav-item nav-profile dropdown">
					  <a className="nav-link" id="profileDropdown" href="#" onClick={e => this.toogleMenu(e)}>
						<div className="nav-profile-text">
						  <p className="text-black font-weight-semibold m-0"> {this.props.user.user_name} </p>
						  <span className="font-13 online-color">
							online <i className="mdi mdi-chevron-down"><FontAwesomeIcon icon={faChevronDown} /></i>
						  </span>
						</div>
					  </a>
					  <div className={this.state.showDropdown}>
						<a className="dropdown-item" href="/logout"><i className="mdi mdi-logout mr-2 text-primary"><FontAwesomeIcon icon={faSignOutAlt} /></i> Logout </a>
					  </div>
					</li>
		}
	
		return (
		  <nav className="navbar top-navbar col-lg-12 col-12 p-0">
			<div className="container">
				<div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
				<a href={indexUrl} className="navbar-brand brand-logo">
				  <img src={Logo} alt="logo" />
				  <span className="font-12 d-block font-weight-light">Responsive Dashboard </span>
				</a>
				<a href={indexUrl} className="navbar-brand brand-logo-mini"><img src={LogoMini} alt="logo" /></a>
			  </div>
			  <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
				<ul className="navbar-nav navbar-nav-right">{loginNav}</ul>
				<button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={e => this.toogleMobile(e)}>
				  <span className="mdi mdi-menu"><FontAwesomeIcon icon={faBars} /></span>
				</button>
			  </div>
			</div>
		  </nav>
		);
	}
}

export default TopNav;