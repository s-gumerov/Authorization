import React, { useState, useRef, useEffect } from "react";
import { IChangePassword, IPrompt } from "../../../../Interfaces";
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

    const toggleInputTypeRef = useRef<HTMLInputElement>(null);

    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        buttonDisabled === false ? console.log('succes') : console.log('how could you press the button? it should be blocked');
    };

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        const completedHandler = (type: string, completed: boolean) => {
            if (type === 'userName') setUserNameCompleted(completed);
            if (type === 'userEmail') setUserEmailComleted(completed);
            if (type === 'userPhone') setUserPhoneNumberComleted(completed);
            if (type === 'userPassword') setUserPasswordComleted(completed);
        };

        const getCheck = (inputId: string, inputValue: string) => {
            if (inputId === 'userName') {
                return {
                    message: 'Не может содержать цифры и символы кроме пробела и дефиса',
                    checkedText: inputValue.match(/[a-zA-Zа-яА-Я- ]/g)
                }
            } else if (inputId === 'userEmail') {
                return {
                    message: 'Может содержать email',
                    checkedText: inputValue.match(/[a-zA-Z0-9.@]/g)
                }
            } else if (inputId === 'userPhone') {
                return {
                    message: 'Не может содержать цифры и символы кроме пробела и дефиса',
                    checkedText: inputValue.match(/[0-9()-+]/g)
                }
            } else if (inputId === 'userPassword') {
                return {
                    message: 'Может содержать цифры и латинские буквы верхнего и нижнего регистра, минимум 4 символа',
                    checkedText: inputValue.match(/[a-zA-Z0-9]/g)
                }
            } else {
                console.log(`please add input:${inputId} in this function`);
            }
        };

        const checkData = getCheck(e.target.id, e.target.value);
        const message = checkData!.message;
        const checkedValue = checkData!.checkedText;

        let error = true;
        let completed = true;

        const errorMessage = (error: boolean, completed: boolean) => {
            setPromptProps({
                id: e.target.id,
                message: message,
                error: error
            });
            completedHandler(e.target.id, completed);
        };

        if (checkedValue === null && e.target.value.length > 0) {
            errorMessage(error, !completed);
        } else if (checkedValue !== null && checkedValue!.length > 0) {
            checkedValue!.length === e.target.value.length ? errorMessage(!error, completed) : errorMessage(error, !completed);
        } else {
            e.target.value.length < 1 ? errorMessage(!error, !completed) : errorMessage(error, !completed);
        };
    };


    const showPassword = () => {
        if (toggleInputTypeRef.current?.type === 'password') toggleInputTypeRef.current.type = 'text';
    };

    const hidePassword = () => {
        if (toggleInputTypeRef.current?.type === 'text') toggleInputTypeRef.current.type = 'password';
    };

    const changePasswordHandler: IChangePassword = {
        onShowPassword: showPassword,
        onHidePassword: hidePassword
    };

    useEffect(() => {
        userNameCompleted === true &&
            userEmailComleted === true &&
            userPhoneNumberComleted === true &&
            userPasswordComleted === true ?
            setButtonDisabled(false) : setButtonDisabled(true);
    }, [userNameCompleted, userEmailComleted, userPhoneNumberComleted, userPasswordComleted])

    return (
        <section>
            <form
                onSubmit={formHandler}
                className="autorisation-form">
                {promptProps.id === "userName" && <FormPrompt {...promptProps} />}
                <label htmlFor="userName">Имя</label>
                <input type="text" name="userName" id="userName"
                    placeholder="Введите ваше имя" disabled={false}
                    onChange={inputHandler}
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
                    onChange={inputHandler}
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
                    onChange={inputHandler}
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
                    placeholder="Придумайте ваш пароль"
                    ref={toggleInputTypeRef}
                    onChange={inputHandler}
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
