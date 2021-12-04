import React from "react";
import { IUserPasswordComleted } from "../Interfaces";

export const ValidateMessage: React.FC<IUserPasswordComleted> = ({ text, elemClass }) => {

    return (
        <span className={elemClass}>
            {` ${text}`}
        </span>
    )
}