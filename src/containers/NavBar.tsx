import React from "react";
import { LinkComponents } from "../components/LinkComponents/LinkComponents"

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
            <LinkComponents {...mainPage} />
            <LinkComponents {...categoryPage} />
            <LinkComponents {...informationPage} />
        </nav >
    )
}