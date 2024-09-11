import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
type Props = {favoriteStatus: boolean; favoriteAction: () => void}

export const Favorites = ({favoriteStatus, favoriteAction}: Props) => {
  if (favoriteStatus)
    return (
      <FavoriteIcon
        onClick={favoriteAction}
        color='error'
        data-testid='likedButton'
      />
    )

  return (
    <FavoriteBorderIcon
      onClick={favoriteAction}
      color='error'
      data-testid='notLikedButton'
    />
  )
}
