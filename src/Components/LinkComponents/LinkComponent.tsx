import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/HeaderLink.css';
import './style/FormLink.css';
import { ILinkProps } from '../../Interfaces';

export const LinkComponent: React.FC<ILinkProps> = ({ className, path, text }) => {
    return (
        <NavLink to={path} className={className}>
            {text}
        </NavLink>
    )
}