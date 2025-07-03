import { ComponentPropsWithoutRef } from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = ({ id, label, ...props }: InputProps) => {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" {...props} />
        </p>
    );
}

export default Input;