import React from "react";
// import { IUserPasswordComleted } from "../../../../../Interfaces";

export const ValidateMessage: React.FC<boolean> = (status: boolean) => {

    return (
        <span className={`${status} span-message`}>
            {/* {` ${status}`} */}
        </span>
    )
}