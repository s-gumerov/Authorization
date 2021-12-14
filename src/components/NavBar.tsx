import React from "react";

export const NavBar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper bdbdbd grey lighten-1 px1">
                <a href="/" className="brand-logo">NavBar</a>
                {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="/">Список дел</a>
                    </li>
                    <li>
                        <a href="/">Информация</a>
                    </li>
                </ul> */}
            </div>
        </nav>
    )
}