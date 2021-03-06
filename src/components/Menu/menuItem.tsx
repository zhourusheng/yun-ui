import React, {
  FC,
  CSSProperties,
  useContext
} from 'react'
import classNames from 'classnames'
import {MenuContext} from './menu'

export interface MenuItemProps {
  index: number
  disabled?: boolean
  className?: string
  style?: CSSProperties
}

const MenuItem: FC<MenuItemProps> = props => {
  const { index, disabled, className, style, children } = props
  const context = useContext(MenuContext)

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': index === context.index
  })

  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }

  return (
    <li className={classes} style={style} onClick={() => handleClick()}>
      {children}
    </li>
  )
}

export default MenuItem
