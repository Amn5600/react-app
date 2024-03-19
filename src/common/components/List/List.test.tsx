import { fireEvent, render } from '../../../helpers/UnitTestHelper'
import List from './List'

describe('<List/>', () => {
    it('Should render List', () => {
        const toggleFavoriteHandler = jest.fn()
        const item = { albumId: 1, id: 1, title: 'dummy title', url: 'dummy_url', thumbnailUrl: 'dummy_thumbnailUrl' }
        const component = render(<List item={item} toggleFavorite={toggleFavoriteHandler} />, {})
        const button = component.getByTestId('list-button-1')
        const icon1 = component.getByTestId('icon-fav2-1')
        expect(icon1).toBeDefined()
        fireEvent.click(button)
        expect(toggleFavoriteHandler).toBeCalled()
    })
})
