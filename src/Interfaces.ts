export interface FormElements extends HTMLFormControlsCollection {
    userEmail: HTMLInputElement,
    userPassword: HTMLInputElement,
}

export interface IAutorizationForm extends HTMLFormElement {
    readonly elements: FormElements
}

export interface IUserPasswordComleted {
    text: string,
    elemClass: string,
}

export interface IChangePassword {
    onShowPassword(): void,
    onHidePassword(): void,
}

export interface IFormInputCompleted {
    userName: boolean,
    userEmail: boolean,
    userPhoneNumber: boolean,
    userPassword: boolean
}

export interface IPrompt {
    id: string;
    hidden?: boolean,
    message: string,
    error: boolean
}


export interface ILinkProps {
    className: string,
    to: string,
    linkText: string,
}
