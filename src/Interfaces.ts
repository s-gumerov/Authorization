export interface FormElements extends HTMLFormControlsCollection {
    userEmail: HTMLInputElement,
    userPassword: HTMLInputElement,
}

export interface IAutorizationForm extends HTMLFormElement {
    readonly elements: FormElements
}

export interface IValidateMessage {
    text: string,
    elemClass: string,
    password: string
}

export interface IChangePassword {
    onShowPassword(): void,
    onHidePassword(): void
}