import React, { useState } from "react";
import { LinkComponent } from "../../../Components/LinkComponents/LinkComponent"
import { IArrayLinkProps } from "../../../Interfaces"
import '../styles/style.css';

export const NavBarMobile: React.FC<IArrayLinkProps> = ({ navProps }) => {
    const [drawerClassName, setDrawerClassName] = useState<string>('drawer-off');
    const [menuClassName, setMenuClassName] = useState<string>('nav-container__menu');

    const pages = navProps.map((page, index) =>
        < LinkComponent key={index} {...page} />
    );

    const toggleClassName = (e: React.TouchEvent<HTMLDivElement>) => {
        menuClassName === 'nav-container__menu' ?
            setMenuClassName('nav-container__menu change') :
            setMenuClassName('nav-container__menu')
        drawerClassName === 'drawer-off' ?
            setDrawerClassName('drawer-on') :
            setDrawerClassName('drawer-off')
    }

    return (
        <div className="nav-container unselectable"
            onTouchStart={toggleClassName}>
            < div className={menuClassName}  >
                <div className="menu__top-line"></div>
                <div className="menu__middle-line"></div>
                <div className="menu__bottom-line"></div>
            </div >
            <div className={drawerClassName === 'drawer-on' ? 'nav-container_lock' : ''}
                onClick={() => setDrawerClassName('drawer-off')}>
                <div className={drawerClassName}>
                    <div className="user-data">
                        <div className="user-data__avatar">

                        </div>

                    </div>
                    {pages}
                </div>
            </div>
        </div>
    )
};