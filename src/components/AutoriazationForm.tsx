import React, { useState, useEffect } from "react";
import { IAutorizationForm, IValidateMessage } from "../Interfaces";
import { ValidateMessage } from "../components/ValidateMessage";
import { IconPassword } from "./IconPassword";

interface IUserData {
    email: string,
    password: string | RegExpMatchArray
}

export const AutoriazationForm: React.FC = () => {
    const [userData, setUserData] = useState<IUserData>({ email: 'email', password: 'password' });
    const [showMessage, setShowMessage] = useState(false);
    const [validateStatus, setValidateStatus] = useState<IValidateMessage>({
        text: '',
        textClass: '',
        password: ''
    })

    function validate(email: string, password: string) {
        const validPassword = password.match(/[a-zA-Z0-9_]/g);
        console.log(validPassword?.length)
        setShowMessage(true);
        if (validPassword !== null && validPassword.length > 0) {
            setUserData(
                prev => {
                    return {
                        ...prev, ...{
                            email: email,
                            password: validPassword.join('')
                        }
                    };
                });

            validPassword.length === password.length ? setValidateStatus(prev => {
                return {
                    ...prev, ...{
                        text: ' Пароль соответствует требованиям',
                        textClass: '',
                        password: password
                    }
                }
            }) : setValidateStatus(prev => {
                return {
                    ...prev, ...{
                        text: ' Пароль не соответствует требованиям',
                        textClass: 'color-red',
                        password: password
                    }
                }
            });
        } else {
            setValidateStatus(prev => {
                return {
                    ...prev, ...{
                        text: ' Пароль не соответствует требованиям',
                        textClass: 'color-red',
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
        console.log(e.target.value);
        validate('', e.target.value)
    };


    useEffect(() => {
        setUserData(userData)
    }, [userData])

    return (
        <form className='m2' onSubmit={formHandler}>
            <label htmlFor="userEmail">Введите email
                <input type="email" name="userEmail" id="userEmail" placeholder="Введите email" />
            </label>
            <label htmlFor="userPassword">Введите пароль
                {showMessage && <ValidateMessage {...validateStatus} />}
                <div className="div-flex">
                    <input type="password" name="userPassword" id="userPassword" placeholder="Введите пароль"
                        onChange={changeHandler}
                    />
                    <IconPassword />
                </div>
            </label>
            <button type="submit" className="btn-form">
                Зарегистрироваться
            </button>
        </form>
    )
}
