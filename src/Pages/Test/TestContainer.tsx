import React from "react";
import { InputsMaskContainer } from "./InputsMaskContainer";
import { IInputProps, IInputArrayProps } from "../../Interfaces";

export const TestContainer: React.FC = () => {

    const tel: IInputProps = {
        id: "tel",
        type: "tel",
        name: "tel",
        className: '',
        mask: "+7 (___) ___ ____",
        title: `titleValue`,
        pattern: "\+7 \s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[ ]{0,1}\d{4}[ ]{0,1}",
        labelText: 'Click me'
    }

    const inputsArray: IInputArrayProps = { inputs: [tel] }

    return (
        <InputsMaskContainer {...inputsArray} />
    )
}