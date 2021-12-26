import React from "react";

export const NavBar: React.FC = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <a href="/">Главная</a>
                </li>
                <li>
                    <a href="/">Категории</a>
                </li>
                <li>
                    <a href="/">Информация</a>
                </li>
            </ul>
        </nav >
    )
}