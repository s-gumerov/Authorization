import React from "react";
import { IValidateMessage } from "../Interfaces";

export const ValidateMessage: React.FC<IValidateMessage> = (message) => {

    const clickHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
        console.log(e.target);
    };
    return (
        <>
            <span className={message.textClass}
                onClick={clickHandler}>
                {message.text}
            </span>
        </>
    )
}