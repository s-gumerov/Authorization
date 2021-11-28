import React from "react";

interface StatusProps {
    status: boolean
}

export const ValidateMessage: React.FC<StatusProps> = ({ status }) => {
    console.log(status);
    const messageTrue = <span> Пароль соответствует требованиям</span>;
    const messageFalse = <span className="cr"> Пароль может содержать только латинские буквы и цифры</span>;
    return (
        <>
            {status === true ? messageTrue : messageFalse}
        </>
    )
}