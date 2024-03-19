import Box from '@mui/material/Box'
import { fireEvent, render, waitFor } from '../../../helpers/UnitTestHelper'
import LazyLoadScroll from './LazyLoadScroll'

jest.mock('../../../constants/AppConstants', () => ({
    ...jest.requireActual('../../../constants/AppConstants'),
    DEBOUNCE_FUNCTION_TIME: 0,
}))

const albumList = [
    { albumId: 1, id: 1, title: 'dummy title', url: 'dummy_url', thumbnailUrl: 'dummy_thumbnailUrl' },
    { albumId: 2, id: 2, title: 'dummy title', url: 'dummy_url', thumbnailUrl: 'dummy_thumbnailUrl' },
    { albumId: 3, id: 3, title: 'dummy title', url: 'dummy_url', thumbnailUrl: 'dummy_thumbnailUrl' },
    { albumId: 4, id: 4, title: 'dummy title', url: 'dummy_url', thumbnailUrl: 'dummy_thumbnailUrl' },
    { albumId: 5, id: 5, title: 'dummy title', url: 'dummy_url', thumbnailUrl: 'dummy_thumbnailUrl' },
]
describe('<LazyLoadScroll/>', () => {
    it('Should render LazyLoadScroll', async () => {
        const onScrollHandler = jest.fn()
        const component = render(
            <LazyLoadScroll
                listItems={albumList.map((item) => (
                    <Box sx={{ height: '50px' }} key={item.id} data-testid={`list-row-${item.id}`}>
                        {item.id}
                    </Box>
                ))}
                onScroll={onScrollHandler}
            />,
            {},
        )
        const rowOne = component.getByTestId('list-row-1')

        const lazyLoadScroll = component.getByTestId('lazyLoadScroll')
        await waitFor(() => {
            fireEvent.scroll(lazyLoadScroll, { target: { scrollY: 1000 } })
            expect(onScrollHandler).toBeCalledTimes(1)
            expect(rowOne).toBeDefined()
        })
    })
})
