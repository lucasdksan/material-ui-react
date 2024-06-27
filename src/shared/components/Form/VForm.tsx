import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
    [key: string]: any;
};

interface Field {
    name: string;
    type: string;
    label: string;
    placeholder?: string;
    validation?: Record<string, any>;
};

interface IVFormProps {
    fields: Field[];
    onSubmit: SubmitHandler<FormValues>;
};

export const VForm = ({ fields, onSubmit }: IVFormProps) => {
    const { handleSubmit, formState: { errors } } = useForm<FormValues>();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field) => (
                <div key={field.name}>
                    <label>{field.label}</label>
                    
                    {errors[field.name] && <span>This field is required</span>}
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
}