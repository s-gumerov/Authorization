import React from "react"
import { IPrompt } from "../../../../../Interfaces"

export const FormPrompt: React.FC<IPrompt> = ({ message, error }) => {

    return (
        <i className={`${error && 'form-prompt_error'}`}>
            {message}
        </i>
    )
}
