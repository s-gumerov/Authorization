import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/HeaderLink.css';
import './style/FormLink.css';
import { ILinkProps } from '../../Interfaces';

export const LinkComponent: React.FC<ILinkProps> = ({ className, path, text }) => {
    const clickHanlker = () => true;

    return (
        <NavLink to={path} className={className} onClick={clickHanlker}>
            {text}
        </NavLink>
    )
}