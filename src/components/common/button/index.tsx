import classNames from './button.module.css'

import cn from 'classnames'

import { ButtonHTMLAttributes } from 'react'

export interface ButtonPropsI extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled: boolean
}

function Button(props: ButtonPropsI) {
  const { className, disabled, children, ...restProps } = props

  const buttonClassName = cn(className, classNames.button, {
    [classNames.button__disabled]: disabled,
  })

  return (
    <button {...restProps} className={buttonClassName}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
}

export { Button }
