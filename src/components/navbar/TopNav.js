import React from "react";
import Logo from "../../assets/img/logo.svg";
import LogoMini from "../../assets/img/logo-mini.svg";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "../../models/User";

class TopNav extends React.Component<{ user: User | undefined }> {
	render() {
    let indexUrl = "/";
    let loginNav;

    if (this.props.user === undefined) {
      loginNav = <li className="nav-item nav-profile dropdown">
                  <a className="nav-link" href="/login">
                    <div className="nav-profile-text">
                      <p className="text-black font-weight-semibold m-0"> LOGIN </p>
                    </div>
                  </a>
                </li>
    } else {
      loginNav = <li className="nav-item nav-profile dropdown">
                  <a className="nav-link" id="profileDropdown" href={indexUrl} data-toggle="dropdown" aria-expanded="false">
                    <div className="nav-profile-text">
                      <p className="text-black font-weight-semibold m-0"> {this.props.user.user_name} </p>
                      <span className="font-13 online-color">
                        online <i className="mdi mdi-chevron-down"><FontAwesomeIcon icon={faChevronDown} /></i>
                      </span>
                    </div>
                  </a>
                  <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                    <a className="dropdown-item" href="/logout"><i className="mdi mdi-logout mr-2 text-primary"></i> Logout </a>
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
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
              <span className="mdi mdi-menu"><FontAwesomeIcon icon={faBars} /></span>
            </button>
          </div>
      	</div>
      </nav>
    );
  }
}

export default TopNav;