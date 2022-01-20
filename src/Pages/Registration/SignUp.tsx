import React from "react";
import { RegistrationForm } from './RegistrationForm/RegistrationForm/RegistrationForm';
import { LinkComponent } from "../../Components/LinkComponents/LinkComponent"

// import { AutoriazationForm } from "./AutoriazationForm";

export const SignUp: React.FC = () => {

    const formLink = {
        text: 'Войти',
        path: "/sign-in",
        className: "form-link"
    }

    return (
        <div className="autorisation-container unselectable">
            <h2>Регистрация</h2>
            <p>
                Уже есть аккаунт?
                <LinkComponent {...formLink} />
            </p>
            <RegistrationForm />
        </div>
    )
}