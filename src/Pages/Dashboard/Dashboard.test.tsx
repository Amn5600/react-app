import Dashboard from './Dashboard'
import { fireEvent, render, waitFor } from '../../helpers/UnitTestHelper'

const initialState = {
    listState: {
        albumList: [
            { albumId: 1, id: 1, title: 'dummy title', url: 'dummy_url', thumbnailUrl: 'dummy_thumbnailUrl' },
            { albumId: 2, id: 2, title: 'dummy title', url: 'dummy_url', thumbnailUrl: 'dummy_thumbnailUrl', favorite: true },
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
describe('<Dashboard/>', () => {
    it('Should render Dashboard', async () => {
        const component = render(<Dashboard />, initialState)
        const rowOne = component.getByTestId('list-row-2')
        expect(rowOne).toBeDefined()
    })
})
