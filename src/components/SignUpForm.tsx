import React, { useState, useRef, useEffect } from "react";
import { IAutorizationForm, IChangePassword, IUserPasswordComleted } from "../Interfaces";
import { ValidateMessage } from "./ValidateMessage";
import { IconPassword } from "./IconPassword";

export const SignUpForm: React.FC = () => {
    const [userNameCompleted, setUserNameCompleted] = useState<boolean>(false);
    const [userEmailComleted, setUserEmailComleted] = useState<boolean>(false);
    const [userPhoneNumberComleted, setUserPhoneNumberComleted] = useState<boolean>(false);
    const [userPasswordComleted, setUserPasswordComleted] = useState<IUserPasswordComleted>({
        text: '',
        elemClass: '',
    });
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const successfulPasswordValidate = () => {
        setUserPasswordComleted(prev => {
            return {
                ...prev, ...{
                    text: 'Пароль соответствует требованиям',
                    elemClass: '',
                }
            }
        });
    };

    const unsuccessfulPasswordValidate = () => {
        setUserPasswordComleted(prev => {
            return {
                ...prev, ...{
                    text: 'Пароль не соответствует требованиям',
                    elemClass: 'color-red',
                }
            }
        });
    };

    const formHandler = (e: React.FormEvent<IAutorizationForm>) => {
        e.preventDefault();
        const [email, password] = [
            e.currentTarget.elements.userEmail.value,
            e.currentTarget.elements.userPassword.value
        ]
    };


    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            const validName = e.target.value.match(/[a-zA-Z_]/g);
            if (validName === null && e.target.value.length > 0) {
                setUserNameCompleted(false);
            } else if (validName !== null && validName.length > 0) {
                validName.length === e.target.value.length ?
                    setUserNameCompleted(true) :
                    setUserNameCompleted(false);
            } else {
                setUserNameCompleted(false);
            }
        };

        const inputEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            const validEmail = e.target.value.match(/[a-zA-Z_]/g);
            if (validEmail === null && e.target.value.length > 0) {
                setUserEmailComleted(false);
            } else if (validEmail !== null && validEmail.length > 0) {
                validEmail.length === e.target.value.length ?
                    setUserEmailComleted(true) :
                    setUserEmailComleted(false);
            } else {
                setUserEmailComleted(false);
            }
        };

        const inputPhoneNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            const validPhoneNumber = e.target.value.match(/[0-9]/g);
            if (validPhoneNumber === null && e.target.value.length > 0) {
                setUserPhoneNumberComleted(false);
            } else if (validPhoneNumber !== null && validPhoneNumber.length > 0) {
                validPhoneNumber.length === e.target.value.length ?
                    setUserPhoneNumberComleted(true) :
                    setUserPhoneNumberComleted(false);
            } else {
                setUserPhoneNumberComleted(false);
            }
        };

        const inputPhonePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

            const validPassword = e.target.value.match(/[a-zA-Z0-9_]/g);

            if (validPassword === null && e.target.value.length > 0) {
                unsuccessfulPasswordValidate();
            } else if (validPassword !== null && validPassword.length > 0) {
                validPassword.length === e.target.value.length ? successfulPasswordValidate() : unsuccessfulPasswordValidate();
            } else {
                setUserPasswordComleted(prev => {
                    return {
                        ...prev, ...{
                            text: '',
                            elemClass: '',
                        }
                    }
                });
            }
        };

        if (e.target.name === 'userName') inputNameHandler(e);
        if (e.target.name === 'userEmail') inputEmailHandler(e);
        if (e.target.name === 'userPhoneNumber') inputPhoneNumberHandler(e);
        if (e.target.name === 'userPassword') inputPhonePasswordHandler(e);
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
        // })

        userNameCompleted === true &&
            userEmailComleted === true &&
            userPhoneNumberComleted === true &&
            userPasswordComleted.text === "Пароль соответствует требованиям" ?
            setButtonDisabled(false) :
            setButtonDisabled(true);

    }, [userNameCompleted, userEmailComleted, userPhoneNumberComleted, userPasswordComleted])

    return (
        <form onSubmit={formHandler} className="autorisation-form">
            <label htmlFor="userName">Имя</label>
            <input type="text" name="userName" id="userName"
                placeholder="Введите ваше имя" disabled={false}
                onChange={inputChangeHandler}
            />

            <label htmlFor="userEmail">Email</label>
            <input type="email" name="userEmail" id="userEmail"
                placeholder="Введите ваш email"
                onChange={inputChangeHandler}
            />

            <label htmlFor="userPhoneNumber">Номер телефона</label>
            <input type="tel" id="userPhoneNumber" name="userPhoneNumber"
                // required={true} minLength={11} maxLength={11}
                placeholder="Введите ваш номер телефона"
                pattern="[8-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={inputChangeHandler}
            />

            <label htmlFor="userPassword">Пароль</label>
            <ValidateMessage {...userPasswordComleted} />
            <div className="div-flex">
                <input type="password" name="userPassword" id="userPassword"
                    // required={true} minLength={4} maxLength={10}
                    placeholder="Придумайте ваш пароль"
                    ref={inputPasswordRef}
                    // onChange={changeHandler}
                    onChange={inputChangeHandler}
                />
                <IconPassword {...changePasswordHandler} />
            </div>

            <button type="submit" className="btn-form" disabled={buttonDisabled === true ? true : false}>
                Зарегистрироваться
            </button>
        </form>
    )
}
