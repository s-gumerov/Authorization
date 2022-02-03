import React from "react";
import { IInputProps, IHTMLInputElement } from "../../Interfaces";


export const InputMaskComponent: React.FC<IInputProps> = ({ id, type, name, className, mask, title, pattern }) => {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const matrix = mask;
        let i = 0;
        let def = matrix.replace(/\D/g, "");
        let val = e.target.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        })
    };

    const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        const setCursorPosition = (e: React.ChangeEvent<IHTMLInputElement>, position: number) => {
            e.target.focus();
            if (e.target.setSelectionRange) {
                e.target.setSelectionRange(position, position);
            }
            else if (e.target.createTextRange) {
                var range = e.target.createTextRange();
                range.collapse(true);
                range.moveEnd("character", position);
                range.moveStart("character", position);
                range.select();
            }
        };

        e.target.value.length === 2 ? e.target.value = mask : setCursorPosition(e, e.target.value.length);
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
            onBlur={blurHandler}
        />
    )
};