import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
interface INavigateButton {
    to: string
    text: string
    buttonProps?: ButtonProps
}
function NavigateButton({ to, text, buttonProps = {} }: INavigateButton) {
    const navigate = useNavigate()
    return (
        <Button onClick={() => navigate(to)} {...buttonProps}>
            {text}
        </Button>
    )
}

export default NavigateButton
