import React, { useState, useEffect } from "react";
import { IAutorizationForm } from "../Interfaces";

interface IUserData {
    email: string,
    password: string | RegExpMatchArray,
}

export const AutoriazationForm: React.FC = () => {
    const [userData, setuserData] = useState<IUserData>({ email: 'email', password: 'password' });

    const validate = (email: string, password: string) => {
        const validPassword = password.match(/[a-zA-Z0-9_]/g)
        if (validPassword !== null) setuserData(
            prev => {
                return {
                    ...prev, ...{
                        email: email,
                        password: validPassword.join('')
                    }
                }
            });
    }

    const formHandler = (e: React.FormEvent<IAutorizationForm>) => {
        e.preventDefault();
        const [email, password] = [
            e.currentTarget.elements.userEmail.value,
            e.currentTarget.elements.userPassword.value
        ]
        validate(email, password)
    }

    useEffect(() => {
        setuserData(userData)
        console.log(userData)
    }, [userData])

    return (
        <form className='m2' onSubmit={formHandler}>
            <label htmlFor="userEmail">Введите email
                <input type="email" name="userEmail" id="userEmail" placeholder="Введите email" />
            </label>
            <label htmlFor="userPassword">Введите пароль
                <input type="password" name="userPassword" id="userPassword" placeholder="Введите пароль" />
            </label>
            <button type="submit" className="btn-form">
                Зарегистрироваться
            </button>
        </form>
    )
}