import cn from 'classnames';
import React, { ReactNode } from 'react'

interface IButton {
    children: ReactNode;
    classNames?: string
}
const Button = ({ children, classNames }: IButton) => {
    return (
        <button className={cn('rounded-md p-2' ,classNames)}>{children}</button>
    )
}

export default Button