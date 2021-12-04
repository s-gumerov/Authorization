import React from "react";
import { SignUpForm } from './SignUpForm';
// import { AutoriazationForm } from "./AutoriazationForm";

export const UserAutorization: React.FC = () => {
    return (
        <div className="container">
            <h1>Регистрация</h1>
            <p>
                Уже есть аккаунт?
                <a href="/"> Войти</a>
            </p>
            <SignUpForm />
            {/* <AutoriazationForm /> */}
        </div>
    )
}