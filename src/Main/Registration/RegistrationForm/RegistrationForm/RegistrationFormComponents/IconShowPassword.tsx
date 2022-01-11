import React, { useState } from "react";
import './style/style.css'
import { IChangePassword } from "../../../../../Interfaces";

export const IconShowPassword: React.FC<IChangePassword> = ({ onShowPassword, onHidePassword }) => {
    const [icon, setIcon] = useState('icon-unchecked')


    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
        if (icon === 'icon-unchecked') {
            setIcon('icon-checked');
            onShowPassword();
        } else {
            setIcon('icon-unchecked')
            onHidePassword();
        }
    };
    console.log(icon)
    return (
        <>
            {/* <i className={icon.class} onClick={clickHandler}>
            </i> */}
            <span className={icon} onClick={clickHandler}>
            </span>
        </>

    )
}