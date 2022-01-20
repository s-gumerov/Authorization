import React from "react";
import { LinkComponent } from "../Components/LinkComponents/LinkComponent"

export const NavBar: React.FC = () => {

    const mainPage = {
        text: 'Главная',
        path: "/main",
        className: "header-link"
    }

    const categoryPage = {
        text: 'Категории',
        path: "/cat",
        className: "header-link"
    }

    const signUp = {
        text: 'Зарегистрироваться',
        path: "/sign-up",
        className: "header-link"
    }

    return (
        <nav className="nav-bar">
            <LinkComponent {...mainPage} />
            <LinkComponent {...categoryPage} />
            <LinkComponent {...signUp} />
        </nav >
    )
}