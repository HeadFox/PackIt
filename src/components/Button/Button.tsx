import type {PropsWithChildren, ReactEventHandler} from "react";

export interface ButtonProps extends PropsWithChildren {
    onClick: ReactEventHandler;
}
const Button = ({ children, onClick}: ButtonProps) => <button onClick={onClick}>{children}</button>;

export { Button };
