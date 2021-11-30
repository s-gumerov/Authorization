import React from "react";
import { IValidateMessage } from "../Interfaces";

export const ValidateMessage: React.FC<IValidateMessage> = ({ text, elemClass }) => {

    return (
        <span className={elemClass}>
            {` ${text}`}
        </span>
    )
}