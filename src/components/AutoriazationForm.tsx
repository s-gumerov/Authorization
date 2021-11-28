import React, { useState, useEffect } from "react";
import { IAutorizationForm } from "../Interfaces";
import { ValidateMessage } from "../components/ValidateMessage";

interface IUserData {
    email: string,
    password: string | RegExpMatchArray
}

export const AutoriazationForm: React.FC = () => {
    const [userData, setuserData] = useState<IUserData>({ email: 'email', password: 'password' });
    const [showMessage, setShowMessage] = useState(false);
    const [validateStatus, setValidateStatus] = useState(false);

    const validate = (email: string, password: string) => {
        const validPassword = password.match(/[a-zA-Z0-9_]/g);
        setShowMessage(true);
        if (validPassword !== null && validPassword.length > 0) {
            setuserData(
                prev => {
                    return {
                        ...prev, ...{
                            email: email,
                            password: validPassword.join('')
                        }
                    }
                });
            validPassword.length === password.length ? setValidateStatus(true) : setValidateStatus(false);
        } else {
            setValidateStatus(false);
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

    useEffect(() => {
        setuserData(userData)
    }, [userData])

    return (
        <form className='m2' onSubmit={formHandler}>
            <label htmlFor="userEmail">Введите email
                <input type="email" name="userEmail" id="userEmail" placeholder="Введите email" />
            </label>
            <label htmlFor="userPassword">Введите пароль
                {showMessage && <ValidateMessage status={validateStatus} />}
                <input type="password" name="userPassword" id="userPassword" placeholder="Введите пароль" />
            </label>
            <button type="submit" className="btn-form">
                Зарегистрироваться
            </button>
        </form>
    )
}
