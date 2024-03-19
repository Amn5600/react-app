import { Box, SxProps } from '@mui/material'
import React, { ReactElement, useCallback, useLayoutEffect, useRef } from 'react'
import { DEBOUNCE_FUNCTION_TIME } from '../../../constants/AppConstants'
import { debounce } from 'lodash'

interface ILazyLoadScroll {
    className?: string
    debounceTime?: number
    sx?: SxProps
    listItems: ReactElement[]
    onScroll: () => void
    scrollPostionTracker?: (scrolledAmount: number) => void
    scrolledAmount?: number
}
function LazyLoadScroll({
    scrolledAmount = 0,
    className = '',
    onScroll,
    scrollPostionTracker,
    debounceTime = DEBOUNCE_FUNCTION_TIME,
    listItems,
    sx = {},
}: ILazyLoadScroll) {
    const outerDivRef = useRef<HTMLDivElement>()
    const innerDivRef = useRef<HTMLDivElement>()

    useLayoutEffect(() => {
        if (outerDivRef.current) {
            outerDivRef.current.scrollTop = scrolledAmount
        }
    }, [])

    const debouncedOnScroll = useCallback(
        debounce((e) => {
            const wrapperDivHeight = innerDivRef.current?.offsetHeight ?? 0
            const scrollElementHeight = e.target.offsetHeight
            const scrolledAmount = e.target.scrollTop
            scrollPostionTracker && scrollPostionTracker(scrolledAmount)
            if (scrollElementHeight + scrolledAmount >= wrapperDivHeight) {
                onScroll()
            }
        }, debounceTime),
        [],
    )

    return (
        <Box
            onScroll={(e) => debouncedOnScroll(e)}
            data-testid="lazyLoadScroll"
            className={`lazyLoadScroll  ${className}`}
            ref={outerDivRef}
            sx={{
                minHeight: 300,
                maxHeight: 500,
                height: '100%',
                overflowX: 'hidden',
                overflowY: 'auto',
                padding: '0 14px',
                marginRight: '-15px',
                ...sx,
            }}
        >
            <Box className="lazyLoadScrollDiv" ref={innerDivRef}>
                {listItems}
            </Box>
        </Box>
    )
}

export default LazyLoadScroll
