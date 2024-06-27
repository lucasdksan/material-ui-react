import { SubmitHandler, useForm } from "react-hook-form";
import { VTextField } from "./VTextField";

interface FormValues {
    [key: string]: any;
};

export interface FieldForm {
    name: string;
    type: string;
    label?: string;
    placeholder?: string;
    validation?: Record<string, any>;
    required: boolean;
};

interface IVFormProps {
    fields: FieldForm[];
    onSubmit: SubmitHandler<FormValues>;
};

export const VForm = ({ fields, onSubmit }: IVFormProps) => {
    const { handleSubmit, formState: { errors }, register } = useForm<FormValues>();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field) => (
                <div key={field.name}>
                    <VTextField name={field.name} label={field.label} register={register} required={field.required} />
                    {errors[field.name] && <span>This field is required</span>}
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
}