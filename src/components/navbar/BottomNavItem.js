import React from "react";

class BottomNavItem extends React.Component {
	render() {
		return (
            <li className="nav-item">
                <a className="nav-link" href={this.props.item.url}>
                    <i className="mdi menu-icon">{this.props.item.icon}</i>
                    <span className="menu-title">{this.props.item.title}</span>
                </a>
            </li>
		);
	}
}

export default BottomNavItem;