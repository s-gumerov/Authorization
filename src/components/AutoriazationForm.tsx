import { join } from "path";
import React, { useState } from "react";
import { IAutorizationForm } from "../Interfaces";

interface IUserData {
    email: string,
    password: string | RegExpMatchArray,
}



export const AutoriazationForm: React.FC = () => {
    const [userData, setUserData] = useState<IUserData>({ email: '', password: '' });

    // const changeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // }

    const validate = (email: string, password: string) => {
        console.log(password.match(/[a-zA-Z0-9_]/g))
        const validPassword = password.match(/[a-zA-Z0-9_]/g)
        if (validPassword !== null) {
            setUserData(prev => {
                return { ...prev, ...{ email: '', password: validPassword.join('') } }
            });
        }
        console.log(userData)

    }

    const formHandler = (e: React.FormEvent<IAutorizationForm>) => {
        e.preventDefault();
        const [email, password] = [
            e.currentTarget.elements.userEmail.value,
            e.currentTarget.elements.userPassword.value
        ]
        validate(email, password)
    }

    return (
        <form className='m2' onSubmit={formHandler}>
            <label htmlFor="userEmail">{userData.email ? userData.email : 'Введите email'}
                <input type="email" name="userEmail" id="userEmail" placeholder="Введите email" />
            </label>
            <label htmlFor="userPassword">{userData.password ? userData.password : 'Введите пароль'}
                <input type="password" name="userPassword" id="userPassword" placeholder="Введите пароль" />
            </label>
            <button type="submit" className="btn-form">
                Зарегистрироваться
            </button>
        </form>
    )
}