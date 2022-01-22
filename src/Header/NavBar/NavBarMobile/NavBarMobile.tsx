import React, { useState } from "react";
import '../styles/style.css';

export const NavBarMobile: React.FC = () => {
    const [classChange, setClassChange] = useState<boolean>(false);
    const changeMenu = (e: React.TouchEvent<HTMLDivElement>) => {
        setClassChange(!classChange);
        classChange === true ? e.currentTarget.className = `nav_container change` :
            e.currentTarget.className = `nav_container`
    }

    return (
        <div className="nav_container" onTouchStart={changeMenu} >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div >
    )
};