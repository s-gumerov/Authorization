import React from "react";
import { RegistrationForm } from './RegistrationForm/RegistrationForm/RegistrationForm';
import { LinkComponent } from "../../Components/LinkComponents/LinkComponent"

// import { AutoriazationForm } from "./AutoriazationForm";

export const Registration: React.FC = () => {

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
                <LinkComponent {...formLink} />
            </p>
            <RegistrationForm />
        </div>
    )
}