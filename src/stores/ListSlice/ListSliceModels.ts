export interface IListState {
    albumList: IListItem[]
    pageState: IPageState
}

export interface IListItem {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
    favorite?: boolean
}

export interface IToggleFevorite {
    id: number
    favorite: boolean
}
export interface IPageState {
    pageCount: number
    limit: number
    scrollPosition: number
}
