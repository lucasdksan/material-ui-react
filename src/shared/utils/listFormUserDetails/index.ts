import { FieldForm } from "../../components";

export const listFormUserDetails: FieldForm[] = [
    { required: true, name: 'firstName', type: 'text', label: 'First Name', validation: { required: true } },
    { required: true, name: 'lastName', type: 'text', label: 'Last Name', validation: { required: true } },
    { required: true, name: 'email', type: 'email', label: 'Email', validation: { required: true } },
    { required: false, name: 'age', type: 'number', label: 'Age', validation: { min: 18 } },
];