import React from "react";

export const NavBar: React.FC = () => {
    return (
        <nav className="nav-bar">
            <a href="/">Главная</a>
            <a href="/cat">Категории</a>
            <a href="/">Информация</a>
        </nav >
    )
}