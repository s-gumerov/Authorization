import React, { useState } from "react";

export const IconPassword: React.FC = () => {
    const [iconClass, setIconClass] = useState('visibility_off')

    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
        iconClass === 'visibility' ? setIconClass('visibility_off') : setIconClass('visibility')
    };

    return (
        <i className="material-icons" onClick={clickHandler}>
            {iconClass}
        </i>
    )
}