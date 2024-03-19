import { createSlice } from '@reduxjs/toolkit'
import { IMainState } from '../Store'

import { addToListAction, pageScrollPositionAction, toggleFavoritesAction } from './ListSlice.actions'

// Define the initial state
const initialState: IMainState = {
    listState: {
        albumList: [],
        pageState: { pageCount: 0, limit: 10, scrollPosition: 0 },
    },
}

// Create the list slice
const listSlice = createSlice({
    name: 'listState',
    initialState,
    reducers: {
        addToList: addToListAction,
        toggleFavorites: toggleFavoritesAction,
        pageScrollPosition: pageScrollPositionAction,
    },
})

export const { addToList, toggleFavorites, pageScrollPosition } = listSlice.actions

export default listSlice.reducer
