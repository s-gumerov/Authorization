import React, { useState } from "react";
import './style/style.css';
import { IChangePassword } from "../../../../../Interfaces";

export const ShowPassword: React.FC<IChangePassword> = ({ onShowPassword, onHidePassword }) => {
    const [icon, setIcon] = useState('icon-unchecked');


    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
        if (icon === 'icon-unchecked') {
            setIcon('icon-checked');
            onShowPassword();
        } else {
            setIcon('icon-unchecked')
            onHidePassword();
        }
    };
    return (
        <div onClick={clickHandler} className="show-password">
            <div className={icon} >
            </div>
            Показать пароль
        </div>
    )
}