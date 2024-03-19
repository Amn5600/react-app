import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyle = makeStyles<Theme>((theme) => ({
    listRow: {
        display: 'flex',
        gap: 2,
        border: `1px solid #ccc`,
        padding: 0,
        alignItems: 'center',

        marginBottom: 5,
        borderRadius: 5,
        overflow: 'hidden',
        minHeight: 51,
    },
    id: {
        width: 50,
        textAlign: 'center',
    },
    itemThumbnail: {
        width: 50,
        '& img': {
            width: '100%',
            objectFit: 'cover',
            display: 'block',
        },
    },
    title: {
        flex: 'auto',
    },
    buttonWrapper: {
        marginRight: 10,
        '& button': {
            textTransform: 'capitalize',
        },
    },
}))
