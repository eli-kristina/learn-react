import React from "react";
import { faCompass, faStar, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "../../models/User";
import BottomNavItem from "./BottomNavItem";

interface BottomNavProps {
    user: User | undefined,
    toogle: 0
}

class BottomNav extends React.Component<BottomNavProps> {
    renderMenu() {
        const rows = [];

        let item = {
            url: "/",
            icon: <FontAwesomeIcon icon={faCompass} size="xs" />,
            title: "Home"
        };

        rows.push(
            <BottomNavItem item={item} />
        );

        item = {
            url: "/shop",
            icon: <FontAwesomeIcon icon={faStar} size="xs" />,
            title: "Shop"
        };

        rows.push(
            <BottomNavItem item={item} />
        );

        item = {
            url: "/faq",
            icon: <FontAwesomeIcon icon={faBookmark} size="xs" />,
            title: "FAQ"
        };

        rows.push(
            <BottomNavItem item={item} />
        );

        return rows;
    }

    render() {
        let className = 'bottom-navbar';

        if (this.props.toogle) {
            className = 'bottom-navbar header-toggled';
        }

        return (
            <nav className={className}>
                <div className="container">
                    <ul className="nav page-navigation">
                        {this.renderMenu()}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default BottomNav;