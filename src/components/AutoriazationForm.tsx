import React, { useState } from "react";
import { IAutorizationForm } from "../Interfaces";

interface IUserData {
    email: string,
    password: string,
}

export const AutoriazationForm: React.FC = () => {
    const [userData, setUserData] = useState<IUserData>({ email: '', password: '' });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newUserData: IUserData = {
            email: e.target.name === "userEmail" ? e.target.value : userData.email,
            password: e.target.name === "userPassword" ? e.target.value : userData.password
        }

        setUserData(prev => {
            return { ...prev, ...newUserData }
        })
        console.log(newUserData, userData)
    }

    const formHandler = (e: React.FormEvent<IAutorizationForm>) => {
        e.preventDefault();
        const [email, password] = [
            e.currentTarget.elements.userEmail.value,
            e.currentTarget.elements.userPassword.value
        ]
        console.log(email, password)
    }

    return (
        <form className='m2' onSubmit={formHandler}>
            <label htmlFor="userEmail">Введите email
                <input type="email" name="userEmail" id="userEmail" placeholder="Введите email"
                    onChange={changeHandler}
                />
            </label>
            <label htmlFor="userPassword">Введите пароль
                <input type="password" name="userPassword" id="userPassword" placeholder="Введите пароль"
                    onChange={changeHandler}
                />
            </label>
            <button type="submit" className="btn-form">
                Зарегистрироваться
            </button>
        </form>
    )
}