import React from "react"
import { IPrompt } from "../Interfaces"

export const FormPrompt: React.FC<IPrompt> = ({ hidden, message }) => {

    return (
        < div className={`form-prompt ${hidden ? 'hidden' : ''}`}  >
            {message}
        </div >
    )
}
