import React from 'react';
import './style/HeaderLink.css';
import './style/FormLink.css';
import { ILinkProps } from '../../Interfaces';

export const LinkComponent: React.FC<ILinkProps> = ({ className, to, linkText }) => {
    return (
        <a href={to} className={className}>
            {linkText}
        </a>
    )
}