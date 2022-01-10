import React from "react";
import { SignUpForm } from '../components/SignUpForm';
import { LinkComponents } from "../components/LinkComponents/LinkComponents"

// import { AutoriazationForm } from "./AutoriazationForm";

export const UserAutorization: React.FC = () => {

    const formLink = {
        linkText: 'Войти',
        to: "/sign",
        className: "form-link"
    }

    return (
        <div className="autorisation-container unselectable">
            <h2>Регистрация</h2>
            <p>
                Уже есть аккаунт?
                <LinkComponents {...formLink} />
            </p>
            <SignUpForm />
        </div>
    )
}