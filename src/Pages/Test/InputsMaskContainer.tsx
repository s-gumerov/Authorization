import React from "react";
import { IInputArrayProps } from "../../Interfaces";
import { InputMaskComponent } from "./InputMaskComponent";

export const InputsMaskContainer: React.FC<IInputArrayProps> = ({ inputs }) => {
    const inpputs = inputs.map((input, index) =>
        <label key={index} htmlFor={input.id}>
            < InputMaskComponent key={index} {...input} />
        </label>

    );


    return (
        <>
            {inpputs}
        </>
    )
};