import { FunctionComponent, ReactNode } from "react"

interface ButtonProps {
    children: ReactNode,
    className?: string,
    onClick?: () => void
}

export const Button: FunctionComponent<ButtonProps> = ({ children, className, onClick }) => {
    return (

        <button className={`${className}`} onClick={onClick}>
            <h1 className="">
                {children}
            </h1>
        </button>

    )
}