import React from 'react';
import './HeaderLink.css';
import './FormLink.css';
import { ILinkProps } from '../../Interfaces';

export const LinkComponents: React.FC<ILinkProps> = ({ className, to, linkText }) => {
    return (
        <a href={to} className={className}>
            {linkText}
        </a>
    )
}