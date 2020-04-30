import React, { FC, useState, CSSProperties, createContext } from 'react'
import classNames from 'classnames'

// 字符串字面量
export type MenuMode = 'horizontal' | 'vertical'
export type SelectallBack = (selectIndex: number) => void

export interface MenuProps {
  defaultIndex?: number
  className?: number
  mode?: MenuMode
  style?: CSSProperties
  onSelect?: SelectallBack
}

export interface IMenuContext {
  index: number
  onSelect?: SelectallBack
}

export const MenuContext = createContext<IMenuContext>({
  index: 0
})

const Menu: FC<MenuProps> = props => {
  const { defaultIndex, className, mode, style, onSelect, children } = props

  const [currentIndex, setCurrentIndex] = useState(defaultIndex)

  const classes = classNames('yun-menu', className, {
    'menu-vertical': mode === 'vertical'
  })

  const handleClick = (index: number) => {
    setCurrentIndex(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: currentIndex || 0,
    onSelect: handleClick
  }

  // 使用 context 向子组件传递数据

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu
