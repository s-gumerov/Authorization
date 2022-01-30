import React, { useState } from "react";
import style from './style.module.css'

export const Test: React.FC = () => {
    const [telValue, setTelValue] = useState<string>('+7 (___) ___ ____');

    const setCursorPosition = (pos: number, elem: any) => {

        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        }
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    };


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        const matrix = e.target.placeholder;
        let i = 0;
        let def = matrix.replace(/\D/g, "");
        let val = e.target.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        let text = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        setTelValue(text);
        if (e.type === "blur") {
            if (e.target.value.length === 2) e.target.value = ""
        } else setCursorPosition(e.target.value.length, e.target)
    };

    return (
        <>
            <div className={style.test}>
                <label htmlFor="tel"> Tel
                    <input type="tel"
                        name="tel"
                        id="tel"
                        className={style.test_input}
                        pattern="\+7 \s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[ ]{0,1}\d{4}[ ]{0,1}"
                        placeholder="+7 (___) ___ ____"
                        title="numbers +7 (___) ___ ____"
                        value={telValue}
                        onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                            setCursorPosition(4, e.target)}
                        onChange={changeHandler}
                    />
                </label>
            </div>

        </>
    )
};