import React from "react"
import { IPrompt } from "../../../../../Interfaces"

export const FormPrompt: React.FC<IPrompt> = ({ hidden, message }) => {

    return (
        <i className={` ${hidden ? 'form-prompt_hidden' : ''}`}>
            {message}
        </i>
    )
}
