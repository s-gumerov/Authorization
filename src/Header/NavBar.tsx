import React from "react";
import { LinkComponent } from "../Components/LinkComponents/LinkComponent"

export const NavBar: React.FC = () => {

    const mainPage = {
        linkText: 'Главная',
        to: "/main",
        className: "header-link"
    }

    const categoryPage = {
        linkText: 'Категории',
        to: "/cat",
        className: "header-link"
    }

    const informationPage = {
        linkText: 'Информация',
        to: "/info",
        className: "header-link"
    }

    return (
        <nav className="nav-bar">
            <LinkComponent {...mainPage} />
            <LinkComponent {...categoryPage} />
            <LinkComponent {...informationPage} />
        </nav >
    )
}