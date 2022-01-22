import React from "react";
import wrapper from '../styles/NavBar.module.css';
import { LinkComponent } from "../../../Components/LinkComponents/LinkComponent"
import { IArrayLinkProps } from "../../../Interfaces"

export const NavBarPC: React.FC<IArrayLinkProps> = ({ navProps }) => {

    const pages = navProps.map((page, index) =>
        < LinkComponent key={index} {...page} />
    );

    return (
        <nav className={wrapper.nav_PC}>
            {pages}
        </nav >
    )
}