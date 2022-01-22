import React from "react";
import { NavBarPC } from "./NavBarPC/NavBarPC";
import { NavBarMobile } from "./NavBarMobile/NavBarMobile";
import { IArrayLinkProps, ILinkProps } from "../.././Interfaces"
export const NavBar: React.FC = () => {
    // const [desktop, setDesktop] = useState<boolean>(false);
    // const width = window.screen.width;
    // width < 767 ? setDesktop(false) : setDesktop(true)
    // console.log(width)
    const mainPage: ILinkProps = {
        text: 'Главная',
        path: "/",
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
        <>
            {window.screen.width < 767 ? <NavBarMobile /> : <NavBarPC {...navProps} />}
        </>
    )
};