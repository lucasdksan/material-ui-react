import { TextField } from "@mui/material";
import { Path, UseFormRegister } from "react-hook-form";

interface IFormValues {
    "First Name": string
}

interface IVTextFieldProps {
    label: Path<IFormValues>
    register: UseFormRegister<IFormValues>
    required: boolean
}

export const VTextField = ({ label, register, required }:IVTextFieldProps)=> {
    return(
        <div>
            <label>{label}</label>
            <TextField {...register(label, { required })} />
        </div>
    );
}