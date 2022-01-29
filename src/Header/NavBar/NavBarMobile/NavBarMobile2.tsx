import React from "react";
import { LinkComponent } from "../../../Components/LinkComponents/LinkComponent"
import { IArrayLinkProps } from "../../../Interfaces";

export const NavBarMobile: React.FC<IArrayLinkProps> = ({ navProps }) => {

    const pages = navProps.map((page, index) =>
        < LinkComponent key={index} {...page} />
    );

    return (
        <>
            {pages}
        </>
    )
};