import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useStyle } from './List.style'
import If from '../If/If'
import { IListItem } from '../../../stores/ListSlice/ListSliceModels'

interface IList {
    item: IListItem
    showButton?: boolean
    toggleFavorite?: (item: IListItem, favorite: boolean) => void
}
function List({ item, toggleFavorite, showButton = true }: IList) {
    const classes = useStyle()
    return (
        <>
            <Box className={classes.listRow} data-testid={`list-row-${item.id}`}>
                <Box className={classes.itemThumbnail}>
                    <img src={item.thumbnailUrl} alt={item.title} />
                </Box>
                <Box className={classes.id}>
                    <Typography variant="h6" component="h6">
                        {item.id}
                    </Typography>
                </Box>
                <Box className={classes.title}>
                    <Typography variant="h6" component="h6">
                        {item.title}
                    </Typography>
                </Box>
                <If test={showButton}>
                    <Box className={classes.buttonWrapper}>
                        <Button
                            data-testid={`list-button-${item.id}`}
                            onClick={() => toggleFavorite && toggleFavorite(item, !!item.favorite)}
                            variant="contained"
                            size="small"
                            startIcon={
                                item?.favorite ? (
                                    <FavoriteIcon data-testid={`icon-fav1-${item.id}`} />
                                ) : (
                                    <FavoriteBorderIcon data-testid={`icon-fav2-${item.id}`} />
                                )
                            }
                        >
                            {item?.favorite ? 'Remove Favorites' : 'Add Favorites'}
                        </Button>
                    </Box>
                </If>
            </Box>
        </>
    )
}

export default List
