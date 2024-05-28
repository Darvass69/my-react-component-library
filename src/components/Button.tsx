import React, { ButtonHTMLAttributes } from 'react'
import "./Button.scss"
// import './'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string
  textColor?: string
  label?: string
}

export const Button: React.FC<Props> = ({
  bgColor = '#ffdb33',
  textColor = '#646cff',
  children,
  ...rest
}) => {
  if (rest.style == undefined) {
    rest.style = {};
  }
  rest.style.backgroundColor = bgColor;
  rest.style.color = textColor;

  return (
    <button {...rest}>
      {children}
    </button>
  )
}
