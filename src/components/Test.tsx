import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string
  textColor?: string
}

export const Test: React.FC<Props> = ({
  bgColor = 'red',
  textColor = 'white',
  children,
  ...rest
}) => {
  return (
    <button style={{ backgroundColor: bgColor, color: textColor }} {...rest}>
      {children}
    </button>
  )
}