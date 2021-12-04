import React, { useState } from "react";
import { IChangePassword } from "../Interfaces";

export const IconPassword: React.FC<IChangePassword> = ({ onShowPassword, onHidePassword }) => {
    const [iconClass, setIconClass] = useState('visibility')

    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
        if (iconClass === 'visibility') {
            setIconClass('visibility_off');
            onShowPassword();
        } else {
            setIconClass('visibility');
            onHidePassword();
        }
    };

    return (
        <i className="material-icons" onClick={clickHandler}>
            {iconClass}
        </i>
    )
}