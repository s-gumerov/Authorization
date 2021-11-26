import React, { useState, useEffect } from "react";
import { IAutorizationForm } from "../Interfaces";

interface IUserData {
    email: string,
    password: string | RegExpMatchArray,
}



export const AutoriazationForm: React.FC = () => {
    const [defaultUserData, setDefaultUserData] = useState<IUserData>({ email: 'email', password: 'password' });

    const [userData, setUserData] = useState<IUserData>(defaultUserData);

    // const changeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // }



    const validate = (email: string, password: string) => {
        const validPassword = password.match(/[a-zA-Z0-9_]/g)
        if (validPassword !== null) setDefaultUserData({
            email: email,
            password: validPassword.join('')
        });
    }

    // useEffect(() => {
    //     function handleStatusChange(status) {
    //         setIsOnline(status.isOnline);
    //     }

    //     ChatAPI.subscribeToFriendStatus(userData, handleStatusChange);
    //     return () => {
    //         ChatAPI.unsubscribeFromFriendStatus(userData, handleStatusChange);
    //     };
    // }, [defaultUserData, userData]); // Повторно подписаться, только если userData изменился




    useEffect(() => {
        const newData = defaultUserData;
        setUserData(newData)
        console.log(userData)

    }, [defaultUserData, userData])

    const formHandler = (e: React.FormEvent<IAutorizationForm>) => {
        e.preventDefault();
        const [email, password] = [
            e.currentTarget.elements.userEmail.value,
            e.currentTarget.elements.userPassword.value
        ]
        // console.log(email, password)
        validate(email, password)
    }





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