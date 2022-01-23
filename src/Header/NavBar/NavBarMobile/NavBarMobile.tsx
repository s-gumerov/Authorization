import React, { useState } from "react";
import '../styles/style.css';

export const NavBarMobile: React.FC = () => {
    const [drawerClassName, setDrawerClassName] = useState<string>('drawer_off');

    const toggleClassName = (e: React.TouchEvent<HTMLDivElement>) => {
        e.currentTarget.className === 'menu_wrapper' ?
            e.currentTarget.className = 'menu_wrapper change' :
            e.currentTarget.className = 'menu_wrapper'

        drawerClassName === 'drawer_off' ?
            setDrawerClassName('drawer_on') :
            setDrawerClassName('drawer_off')
    }
    let drawer = 'drawer_off'
    return (
        <div className="nav_container">
            < div className="menu_wrapper" onTouchStart={toggleClassName} >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div >
            <div className={drawerClassName}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A consequuntur perspiciatis corrupti, deserunt delectus praesentium nam voluptatibus nostrum itaque, modi aliquid voluptates sit laudantium provident, quibusdam dolores. Doloribus, veniam consequuntur.</p>
            </div>
        </div>
    )
};