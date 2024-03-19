import axios from 'axios'
import { list } from '../../constants/ApiConstants'
import { IListItem } from '../../stores/ListSlice/ListSliceModels'
interface IgetList {
    limit: number
    pageCount: number
}
export const getList = async (pagination: IgetList): Promise<IListItem[] | undefined> => {
    try {
        const { limit, pageCount } = pagination
        const url = `${list.albums}?_page=${pageCount}&_limit=${limit}`
        const response = await axios.get(url)
        const data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}
