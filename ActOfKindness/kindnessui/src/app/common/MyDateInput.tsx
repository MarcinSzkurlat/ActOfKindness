import React from "react";
import { useField, ErrorMessage } from "formik";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import { Form, Label } from "semantic-ui-react";
import { parse } from 'date-fns';

export default function MyDateInput(props: Partial<ReactDatePickerProps>) {
    const [field, meta, helpers] = useField(props.name!);
    const formattedDate = field.value ? 
        (field.value.length === 10 ? parse(field.value, 'dd/MM/yyyy', new Date()) : new Date(field.value)) : null;

    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <DatePicker
                {...field}
                {...props}
                dateFormat='dd/MM/yyyy'
                selected={formattedDate}
                onChange={(date) => {
                    helpers.setValue(date);
                    console.log(date);
                }}
            />
            <ErrorMessage name={props.name!} render={error=>
                <Label basic color={'red'} content={error}/>}/>
        </Form.Field>
    );
}
