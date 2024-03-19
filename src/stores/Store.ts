import { configureStore } from '@reduxjs/toolkit'
import { IListItem, IPageState } from './ListSlice/ListSliceModels'
import listReducer from './ListSlice/ListSlice'

export interface IMainState {
    listState: {
        albumList: IListItem[]
        pageState: IPageState
    }
}

const store = configureStore({
    reducer: listReducer,
})

export default store
