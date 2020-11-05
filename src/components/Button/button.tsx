import React, {
  FC,
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes
} from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  type?: ButtonType
  children: ReactNode
  href?: string
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: FC<ButtonProps> = props => {
  const {
    type,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props

  // prefix
  const btnPrefix = 'yun-btn'

  const classes = classNames(btnPrefix, className, {
    [`${btnPrefix}-${type}`]: type,
    [`${btnPrefix}-${size}`]: size,
    disabled: type === 'link' && disabled
  })

  if (type === 'link') {
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
  type: 'default'
}

export default Button
