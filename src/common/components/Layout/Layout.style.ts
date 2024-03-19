import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyle = makeStyles<Theme>((theme) => ({
    layoutContainer: {
        maxWidth: 1100,
        margin: 'auto',
        padding: 20,
    },
}))
