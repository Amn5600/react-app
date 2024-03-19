import { Box, Grid } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IMainState } from '../../stores/Store'
import { applicationRoutes } from '../../constants/RouteConstants'
import NavigateButton from '../../common/components/NavigateButton/NavigateButton'
import { toggleFavorites, addToList, pageScrollPosition } from '../../stores/ListSlice/ListSlice'
import { getList } from './ListPage.helper'
import List from '../../common/components/List/List'
import LazyLoadScroll from '../../common/components/LazyLoadScroll/LazyLoadScroll'
import { IListItem } from '../../stores/ListSlice/ListSliceModels'

function ListPage() {
    const dispatch = useDispatch()
    const { albumList, pageState } = useSelector((state: IMainState) => state.listState)

    const pageStateRef = useRef(pageState)

    useEffect(() => {
        if (!albumList.length) {
            fetchRecords()
        }
        pageStateRef.current = pageState
    }, [pageState.pageCount])

    const fetchRecords = async () => {
        const newPageState = {
            ...pageStateRef.current,
            pageCount: pageStateRef.current.pageCount + 1,
        }

        const records = await getList(newPageState)

        if (records) {
            dispatch(
                addToList({
                    albumList: records,
                    pageState: newPageState,
                }),
            )
        }
    }
    const toggleFavorite = (item: IListItem, favorite: boolean) => {
        dispatch(toggleFavorites({ id: item.id, favorite: !favorite }))
    }
    const scrollPostionTracker = (scrollPosition: number) => {
        dispatch(pageScrollPosition(scrollPosition))
    }
    const onScrollHandler = () => {
        fetchRecords()
    }
    return (
        <Grid item xs={12}>
            <Box>
                <NavigateButton
                    to={applicationRoutes.dashboad}
                    text={'Back to Dashboard'}
                    buttonProps={{
                        variant: 'contained',
                    }}
                />
            </Box>
            <LazyLoadScroll
                sx={{
                    marginTop: '20px',
                }}
                scrolledAmount={pageState.scrollPosition}
                onScroll={onScrollHandler}
                scrollPostionTracker={scrollPostionTracker}
                listItems={albumList?.map((item) => <List key={item.id} item={item} toggleFavorite={toggleFavorite} showButton />)}
            />
        </Grid>
    )
}

export default ListPage
