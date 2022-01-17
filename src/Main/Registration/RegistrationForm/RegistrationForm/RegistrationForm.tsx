import React, { useState, useRef, useEffect } from "react";
import {
    // IAutorizationForm, 
    IChangePassword,
    // IUserPasswordComleted, 
    IPrompt
} from "../../../../Interfaces";
import { ValidateMessage } from "./RegistrationFormComponents/ValidateMessage";
import { ShowPassword } from "./RegistrationFormComponents/ShowPassword";
import { FormPrompt } from "./RegistrationFormComponents/FormPrompt";

export const RegistrationForm: React.FC = () => {
    const [userNameCompleted, setUserNameCompleted] = useState<boolean>(false);
    const [userEmailComleted, setUserEmailComleted] = useState<boolean>(false);
    const [userPhoneNumberComleted, setUserPhoneNumberComleted] = useState<boolean>(false);
    const [userPasswordComleted, setUserPasswordComleted] = useState<boolean>(false);
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const [promptProps, setPromptProps] = useState<IPrompt>({
        id: '',
        message: '',
        error: false
    });

    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const completedHandler = (type: string, completed: boolean) => {
        if (type === 'userName') setUserNameCompleted(completed);
        if (type === 'userEmail') setUserEmailComleted(completed);
        if (type === 'userPhone') setUserPhoneNumberComleted(completed);
        if (type === 'userPassword') setUserPasswordComleted(completed);
    };

    const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value.match(/[a-zA-Zа-яА-Я- ]/g);

        const errorMessage = (error: boolean, completed: boolean) => {
            setPromptProps({
                id: 'userName',
                message: 'Не может содержать цифры и символы кроме пробела и дефиса',
                error: error
            });
            completedHandler('userName', completed);
        };

        let error = true;
        let completed = true;

        if (name === null && e.target.value.length > 0) {
            errorMessage(error, !completed);
        } else if (name !== null && name.length > 0) {
            name.length === e.target.value.length ? errorMessage(!error, completed) : errorMessage(error, !completed);
        } else {
            e.target.value.length < 1 ? errorMessage(!error, !completed) : errorMessage(error, !completed);
        }
    };

    const inputEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value.match(/[a-zA-Z0-9.@]/g);
        const errorMessage = (error: boolean, completed: boolean) => {
            setPromptProps({
                id: 'userEmail',
                message: 'Может содержать email',
                error: error
            });
            completedHandler('userEmail', completed);
        };

        let error = true;
        let completed = true;

        if (email === null && e.target.value.length > 0) {
            errorMessage(error, !completed);
        } else if (email !== null && email.length > 0) {
            email.length === e.target.value.length ? errorMessage(!error, completed) : errorMessage(error, !completed);
        } else {
            e.target.value.length < 1 ? errorMessage(!error, !completed) : errorMessage(error, !completed);
        }
    };

    const inputPhoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const phone = e.target.value.match(/[0-9()-+]/g);
        const errorMessage = (error: boolean, completed: boolean) => {
            setPromptProps({
                id: 'userPhone',
                message: 'Не может содержать цифры и символы кроме пробела и дефиса',
                error: error
            });
            completedHandler('userPhone', completed);
        };

        let error = true;
        let completed = true;

        if (phone === null && e.target.value.length > 0) {
            errorMessage(error, !completed);
        } else if (phone !== null && phone.length > 0) {
            phone.length === e.target.value.length ? errorMessage(!error, completed) : errorMessage(error, !completed);
        } else {
            e.target.value.length < 1 ? errorMessage(!error, !completed) : errorMessage(error, !completed);
        }
    };

    const inputPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value.match(/[a-zA-Z0-9]/g);
        const errorMessage = (error: boolean, completed: boolean) => {
            setPromptProps({
                id: 'userPassword',
                message: 'Может содержать цифры и латинские буквы верхнего и нижнего регистра, минимум 4 символа',
                error: error
            });
            completedHandler('userPassword', completed);
        };

        let error = true;
        let completed = true;

        if (password === null && e.target.value.length > 0) {
            errorMessage(error, !completed);
        } else if (password !== null && password.length > 0) {
            password.length === e.target.value.length ? errorMessage(!error, completed) : errorMessage(error, !completed);
        } else {
            e.target.value.length < 1 ? errorMessage(!error, !completed) : errorMessage(error, !completed);
        }
    };

    const showPassword = () => {
        if (inputPasswordRef.current?.type === 'password') inputPasswordRef.current.type = 'text';
    };

    const hidePassword = () => {
        if (inputPasswordRef.current?.type === 'text') inputPasswordRef.current.type = 'password';
    };

    const changePasswordHandler: IChangePassword = {
        onShowPassword: showPassword,
        onHidePassword: hidePassword
    };

    useEffect(() => {
        // console.log({
        //     userNameCompleted: userNameCompleted,
        //     userEmailComleted: userEmailComleted,
        //     userPhoneNumberComleted: userPhoneNumberComleted,
        //     userPasswordComleted: userPasswordComleted,
        // });

        userNameCompleted === true &&
            userEmailComleted === true &&
            userPhoneNumberComleted === true &&
            userPasswordComleted === true
            ?
            setButtonDisabled(false) :
            setButtonDisabled(true);

    }, [userNameCompleted, userEmailComleted, userPhoneNumberComleted, userPasswordComleted])

    return (
        <section>
            <form
                // onSubmit={formHandler} 
                className="autorisation-form">
                {promptProps.id === "userName" && <FormPrompt {...promptProps} />}
                <label htmlFor="userName">Имя</label>
                <input type="text" name="userName" id="userName"
                    placeholder="Введите ваше имя" disabled={false}
                    onChange={inputNameHandler}
                    onClick={() => setPromptProps({
                        id: 'userName',
                        message: 'Не может содержать цифры и символы кроме пробела и дефиса',
                        error: false
                    })
                    }
                />

                {promptProps.id === "userEmail" && <FormPrompt {...promptProps} />}
                <label htmlFor="userEmail">Email</label>
                <input type="email" name="userEmail" id="userEmail"
                    placeholder="Введите ваш email"
                    onChange={inputEmailHandler}
                    onClick={() => setPromptProps({
                        id: 'userEmail',
                        message: 'Может содержать email',
                        error: false
                    })}
                />

                {promptProps.id === "userPhone" && <FormPrompt {...promptProps} />}
                <label htmlFor="userPhone">Номер телефона</label>
                <input type="tel" id="userPhone" name="userPhone"
                    required={true} minLength={11} maxLength={16}
                    placeholder="Введите ваш номер телефона"
                    // pattern="[+7]{3}-[0-9]{3}-[0-9]{4}"
                    onChange={inputPhoneHandler}
                    onClick={() =>
                        setPromptProps({
                            id: 'userPhone',
                            message: 'Может содержать 11 цифр, круглые скобки, дефис и знак плюс',
                            error: false
                        })
                    }
                />

                {promptProps.id === "userPassword" && <FormPrompt {...promptProps} />}
                <label htmlFor="userPassword">Пароль</label>

                <input type="password" name="userPassword" id="userPassword"
                    // required={true} minLength={4} maxLength={10}
                    placeholder="Придумайте ваш пароль"
                    ref={inputPasswordRef}
                    onChange={inputPasswordHandler}
                    onClick={() => setPromptProps({
                        id: 'userPassword',
                        message: 'Может содержать цифры и латинские буквы верхнего и нижнего регистра, минимум 4 символа',
                        error: false
                    })}
                />
                <ShowPassword {...changePasswordHandler} />
                <div className="message-wrapper">
                    <ValidateMessage {...userPasswordComleted} />
                </div>
                <button type="submit"
                    disabled={buttonDisabled ? true : false}
                    className={`autorisation-form__btn ${!buttonDisabled && 'autorisation-form_active-btn'}`}>
                    Зарегистрироваться
                </button>
            </form>
        </section>
    )
}
