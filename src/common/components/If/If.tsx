import React, { ReactElement } from 'react'
interface IIf {
    test: boolean
    children: ReactElement
}
function If({ test, children }: IIf) {
    return test ? children : <></>
}

export default If
