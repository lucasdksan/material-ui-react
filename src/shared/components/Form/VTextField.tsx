import { Box, TextField } from "@mui/material";
import { Path, UseFormRegister } from "react-hook-form";

interface IFormValues {
    [key: string]: any;
}

interface IVTextFieldProps {
    label?: string;
    name: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    required: boolean;
}

export const VTextField = ({ label, register, required, name }:IVTextFieldProps)=> {
    return(
        <Box>
            { label && <label>{label}</label> }
            <TextField {...register(name, { required })} />
        </Box>
    );
}