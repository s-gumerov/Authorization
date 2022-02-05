import React, { useState } from "react";
import { IInputProps, IHTMLInputElement } from "../../Interfaces";


export const InputMaskComponent: React.FC<IInputProps> = ({ id, type, name, className, mask, title, pattern }) => {
    const startValue = mask.slice(0, 2);
    // console.log(startValue.length);
    const [position, setPosition] = useState<number>(startValue.length)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // if (e.target.value.length > 15) return
        console.log({
            'eventValue': e.target.value,
            'valueLength': e.target.value.length,
            'position': position
        });

        let space = mask.slice(position + 1, position + 2);
        space === '0' ? space = '' : space = ' ';
        space === ' ' && setPosition((prev) => {
            return prev + 1
        });

        let newValue = `${e.target.value.slice(startValue.length + 1, position + 1)}${space}${e.target.value.slice(position + 1, position + 2)}`;
        console.log(newValue);

        setPosition((prev) => {
            return prev + 1
        });
        e.target.value = `${startValue} ${newValue}`
    };

    const clickHandler = (e: React.MouseEvent<IHTMLInputElement>) => {
        e.currentTarget.setSelectionRange(position + 1, position + 1)

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
            // onBlur={blurHandler}
            onClick={clickHandler}
        />
    )
};
