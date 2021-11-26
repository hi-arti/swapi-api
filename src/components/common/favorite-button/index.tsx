import classNames from './favorites-button.module.css'

import cn from 'classnames'

import { useCallback } from 'react'
import { favoritesUrls } from 'store'

function RawIcon(props: { className: string; onClick: () => void }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={props.className}
      onClick={props.onClick}>
      <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
    </svg>
  )
}

export interface FavoriteButtonPropsI {
  url: string
}

function FavoriteButton(props: FavoriteButtonPropsI) {
  const { url } = props

  const isFavorite = favoritesUrls.store.usePickState(
    favorites => {
      return Boolean(favorites[url])
    },
    [url]
  )

  const onClick = useCallback(() => {
    const favorites = favoritesUrls.store.getState()

    const action = favorites[url]
      ? favoritesUrls.actions.removeFromFavorite
      : favoritesUrls.actions.addToFavorite

    action(url)
  }, [url])

  const iconClassName = cn(classNames.favoriteButton, {
    [classNames.favoriteButtonActive]: isFavorite,
  })

  return <RawIcon className={iconClassName} onClick={onClick} />
}

export { FavoriteButton }
