import React, { useState, useRef } from "react";
import { IAutorizationForm, IChangePassword, IValidateMessage } from "../Interfaces";
import { ValidateMessage } from "../components/ValidateMessage";
import { IconPassword } from "./IconPassword";

export const AutoriazationForm: React.FC = () => {

    const [validateMessage, setValidateMessage] = useState<IValidateMessage>({
        text: '',
        elemClass: '',
        password: '',
    });

    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const validate = (email: string, password: string) => {

        const validPassword = password.match(/[a-zA-Z0-9_]/g);

        if (validPassword === null && password.length > 0) {
            setValidateMessage(prev => {
                return {
                    ...prev, ...{
                        text: 'Пароль не соответствует требованиям',
                        elemClass: 'color-red',
                        password: password
                    }
                }
            })
        } else if (validPassword !== null && validPassword.length > 0) {
            validPassword.length === password.length ? setValidateMessage(prev => {
                return {
                    ...prev, ...{
                        text: 'Пароль соответствует требованиям',
                        elemClass: '',
                        password: password
                    }
                }
            }) : setValidateMessage(prev => {
                return {
                    ...prev, ...{
                        text: 'Пароль не соответствует требованиям',
                        elemClass: 'color-red',
                        password: password
                    }
                }
            });
        } else {
            setValidateMessage(prev => {
                return {
                    ...prev, ...{
                        text: '',
                        elemClass: '',
                        password: password
                    }
                }
            });
        }
    }

    const formHandler = (e: React.FormEvent<IAutorizationForm>) => {
        e.preventDefault();
        const [email, password] = [
            e.currentTarget.elements.userEmail.value,
            e.currentTarget.elements.userPassword.value
        ]
        validate(email, password);
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        validate('', e.target.value)
    };

    const showPassword = () => {
        if (inputPasswordRef.current?.type === 'password') inputPasswordRef.current.type = 'text';
    };

    const hidePassword = () => {
        if (inputPasswordRef.current?.type === 'text') inputPasswordRef.current.type = 'password';
    };

    const changePasswordHandler: IChangePassword = {
        onShowPassword: showPassword,
        onHidePassword: hidePassword
    };

    return (
        <form className='m2' onSubmit={formHandler}>
            <label htmlFor="userEmail">Введите email
                <input type="email" name="userEmail" id="userEmail" placeholder="Введите email" />
            </label>
            <label htmlFor="userPassword">Введите пароль
                <ValidateMessage {...validateMessage} />
                <div className="div-flex">
                    <input type="password" name="userPassword" id="userPassword" placeholder="Введите пароль"
                        ref={inputPasswordRef}
                        onChange={changeHandler}
                    />
                    <IconPassword {...changePasswordHandler} />
                </div>
            </label>
            <button type="submit" className="btn-form">
                Зарегистрироваться
            </button>
        </form>
    )
}
