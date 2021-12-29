import React from "react";
import { SignUpForm } from './SignUpForm';
// import { AutoriazationForm } from "./AutoriazationForm";

export const UserAutorization: React.FC = () => {
    return (
        <div className="autorisation-container unselectable">
            <h2>Регистрация</h2>
            <p>
                Уже есть аккаунт?
                <a href="/"> Войти</a>
            </p>
            <SignUpForm />
            {/* <AutoriazationForm /> */}
        </div>
    )
}