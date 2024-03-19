import ListPage from './ListPage'
import { fireEvent, render, waitFor } from '../../helpers/UnitTestHelper'

jest.mock('../../constants/AppConstants', () => ({
    ...jest.requireActual('../../constants/AppConstants'),
    DEBOUNCE_FUNCTION_TIME: 0,
}))
const initialState = {
    listState: {
        albumList: [
            { albumId: 1, id: 1, title: 'dummy title', url: 'dummy_url', thumbnailUrl: 'dummy_thumbnailUrl' },
            { albumId: 2, id: 2, title: 'dummy title', url: 'dummy_url', thumbnailUrl: 'dummy_thumbnailUrl' },
            { albumId: 3, id: 3, title: 'dummy title', url: 'dummy_url', thumbnailUrl: 'dummy_thumbnailUrl' },
            { albumId: 4, id: 4, title: 'dummy title', url: 'dummy_url', thumbnailUrl: 'dummy_thumbnailUrl' },
            { albumId: 5, id: 5, title: 'dummy title', url: 'dummy_url', thumbnailUrl: 'dummy_thumbnailUrl' },
        ],
        pageState: {
            pageCount: 1,
            limit: 10,
            scrollPosition: 0,
        },
    },
}
describe('<ListPage/>', () => {
    it('Should render ListPage', async () => {
        const component = render(<ListPage />, initialState)
        const rowOne = component.getByTestId('list-row-1')
        const lazyLoadScroll = component.getByTestId('lazyLoadScroll')
        await waitFor(() => {
            fireEvent.scroll(lazyLoadScroll, { target: { scrollY: 1000 } })
            expect(rowOne).toBeDefined()
        })
    })
})
