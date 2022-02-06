import React, { useState } from "react";
import { IInputProps, IHTMLInputElement } from "../../Interfaces";

export const InputMaskComponent: React.FC<IInputProps> = ({ id, type, name, className, mask, title, pattern }) => {
    const [cursorPosition, setCursorPosition] = useState<number>(4);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.value.length <= 3 ? setCursorPosition(4) : setCursorPosition(e.currentTarget.value.length + 1);
        const matrix = mask;
        let i = 0;
        let def = matrix.replace(/\D/g, "");
        let val = e.currentTarget.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        e.currentTarget.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        })
    };

    const blurHandler = (element: HTMLInputElement) => {
        if (element.value.length <= 4) element.value = mask;
    };

    return (
        <input
            id={id}
            type={type}
            name={name}
            className={className}
            pattern={pattern}
            placeholder={mask}
            title={title}
            defaultValue={mask}
            onChange={changeHandler}
            onBlur={(e: React.ChangeEvent<HTMLInputElement>) => blurHandler(e.currentTarget)}
            onClick={(e: React.MouseEvent<IHTMLInputElement>) => e.currentTarget.setSelectionRange(cursorPosition, cursorPosition)}
        />
    )
};
