import React, { FC, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'

// enum
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

// props interface
interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children:ReactNode
  href?: string
}

// 交叉类型 &  联合类型 |
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
// 使用 ts Partial
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button:FC<ButtonProps> = props => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props

  // prefix
  const btnPrefix = 'yun-btn'

  // btn btn-lg btn-primary
  const classes = classNames(btnPrefix, className, {
    [`${btnPrefix}-${btnType}`]: btnType,
    [`${btnPrefix}-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled
  })

  // link button
  if (btnType === ButtonType.Link && href) {
    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button
