import React, { ReactElement } from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { IMainState } from '../stores/Store'

const mockStore = configureStore<IMainState>()

const customRenderWithRedux = (ui: ReactElement, state) => {
    const store = mockStore(state)

    return {
        ...render(
            <BrowserRouter>
                <Provider store={store}>{ui}</Provider>
            </BrowserRouter>,
        ),
        store,
    }
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRenderWithRedux as render }
