import React from "react";
import { NavBarPC } from "./NavBarPC/NavBarPC";
import { IArrayLinkProps, ILinkProps } from "../.././Interfaces"
export const NavBar: React.FC = () => {
    const mainPage: ILinkProps = {
        text: 'Главная',
        path: "/main",
        className: "header-link"
    }

    const categoryPage: ILinkProps = {
        text: 'Категории',
        path: "/cat",
        className: "header-link"
    }

    const signUp: ILinkProps = {
        text: 'Зарегистрироваться',
        path: "/sign-up",
        className: "header-link"
    }

    const navProps: IArrayLinkProps = { navProps: [mainPage, categoryPage, signUp] }

    return (
        <NavBarPC {...navProps} />
    )
};