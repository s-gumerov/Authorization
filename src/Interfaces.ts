export interface ITodo {
    title: string,
    id: number,
    completed: boolean
}

export interface FormElements extends HTMLFormControlsCollection {
    userEmail: HTMLInputElement,
    userPassword: HTMLInputElement,
}

export interface IAutorizationForm extends HTMLFormElement {
    readonly elements: FormElements
}

export interface IValidateMessage {
    text: string,
    textClass: string,
    password: string
}