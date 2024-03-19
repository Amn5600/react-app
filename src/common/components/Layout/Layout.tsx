import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { useStyle } from './Layout.style'

function Layout() {
    const classes = useStyle()

    return (
        <Grid container className={classes.layoutContainer}>
            <Outlet />
        </Grid>
    )
}

export default Layout
