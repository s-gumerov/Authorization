import React from "react";
import { NavBarPC } from "./NavBarPC/NavBarPC";
import { NavBarMobile } from "./NavBarMobile/NavBarMobile";
import { ILinkProps, IArrayLinkProps } from "../.././Interfaces"

export const NavBar: React.FC = () => {
    const styleNavBar = 'header-link';

    const mainPage: ILinkProps = {
        text: 'Главная',
        path: "/",
        className: styleNavBar
    }

    const categoryPage: ILinkProps = {
        text: 'Категории',
        path: "/cat",
        className: styleNavBar
    }

    const signUp: ILinkProps = {
        text: 'Зарегистрироваться',
        path: "/sign-up",
        className: styleNavBar
    }

    const test: ILinkProps = {
        text: 'Test',
        path: "/test",
        className: styleNavBar
    }

    const navProps: IArrayLinkProps = { navProps: [mainPage, categoryPage, signUp, test] }

    return (
        window.screen.width < 767 ? <NavBarMobile {...navProps} /> : <NavBarPC {...navProps} />
    )
};
