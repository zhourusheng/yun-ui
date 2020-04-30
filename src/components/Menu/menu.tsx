import React, {
  FC,
  ReactNode,
  CSSProperties,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes
} from 'react'
import classNames from 'classnames'

// 字符串字面量
export type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: number
  className?: number
  mode?: MenuMode
  style?: CSSProperties
  onSelect?: (selectIndex: number) => void
}

const Menu: FC<MenuProps> = (props) => {
  const {defaultIndex, className, mode, style, onSelect, children} = props

  const classes = classNames('yun-menu', className, {
    'menu-vertical': mode === 'vertical'
  })

  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu