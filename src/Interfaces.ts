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
    path: string,
    text: string,
    drawerClassName?: string
}

export interface IArrayLinkProps {
    navProps: ILinkProps[],
}

export interface ICheckValue {
    message: string,
    checkedText: string
}

export interface IShowMobileNav {
    showMobileNav: boolean
}

export interface INavBarMobileProps {
    wheelHandler?: (e: React.WheelEvent<HTMLDivElement>) => void;
    touchMoveHandler?: (e: React.TouchEvent<HTMLDivElement>) => void;
    touchStartHandler?: (e: React.TouchEvent<HTMLDivElement>) => void;
    touchEndHandler?: (e: React.TouchEvent<HTMLDivElement>) => void
}