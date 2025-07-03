import { ComponentPropsWithoutRef } from "react";

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
};

const Form = ({onSave, children, ...otherProps}: FormProps) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        onSave(data);
    }
    return <form onSubmit={handleSubmit} {...otherProps}> {children}</form>;

}

export default Form;