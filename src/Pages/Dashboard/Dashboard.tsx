import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { applicationRoutes } from '../../constants/RouteConstants'
import NavigateButton from '../../common/components/NavigateButton/NavigateButton'
import { IMainState } from '../../stores/Store'
import { useSelector } from 'react-redux'
import List from '../../common/components/List/List'

function Dashboard() {
    const { albumList } = useSelector((state: IMainState) => state.listState)
    const checkForFavoritesList = () => {
        const list = albumList?.filter((item) => item.favorite).map((item) => <List key={item.id} item={item} showButton={false} />)

        return list.length ? (
            list
        ) : (
            <Typography variant="body1" textAlign="center">
                Please select you favorite items.
            </Typography>
        )
    }
    return (
        <Grid item xs={12}>
            <Box>
                <NavigateButton
                    to={applicationRoutes.list}
                    text={'Go to List'}
                    buttonProps={{
                        variant: 'contained',
                    }}
                />
            </Box>
            <Box
                sx={{
                    marginTop: '20px',
                }}
            >
                {checkForFavoritesList()}
            </Box>
        </Grid>
    )
}

export default Dashboard
