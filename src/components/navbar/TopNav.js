import Logo from "../../assets/img/logo.svg";
import LogoMini from "../../assets/img/logo-mini.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopNav() {
	let indexUrl = "#";

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
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
            <span className="mdi mdi-menu"><FontAwesomeIcon icon={faBars} /></span>
          </button>
        </div>
    	</div>
    </nav>
  );
}

export default TopNav;