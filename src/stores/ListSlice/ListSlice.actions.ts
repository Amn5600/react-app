import { PayloadAction } from '@reduxjs/toolkit'
import { IMainState } from '../Store'
import { IListState, IToggleFevorite } from './ListSliceModels'

export const toggleFavoritesAction = (state: IMainState, action: PayloadAction<IToggleFevorite>) => {
    const newList = state.listState.albumList.map((item) => {
        if (item.id === action.payload.id) {
            return {
                ...item,
                favorite: action.payload.favorite,
            }
        } else {
            return item
        }
    })
    state.listState.albumList = newList
}

export const addToListAction = (state: IMainState, action: PayloadAction<IListState>) => {
    state.listState.pageState = action.payload.pageState
    state.listState.albumList.push(...action.payload.albumList)
}

export const pageScrollPositionAction = (state: IMainState, action: PayloadAction<number>) => {
    state.listState.pageState.scrollPosition = action.payload
}
