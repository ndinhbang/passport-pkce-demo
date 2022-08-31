import React, { forwardRef, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import {
    Box,
    Button, Checkbox,
    Group,
    MultiSelect,
    NumberInput,
    PasswordInput, Radio, SegmentedControl,
    Select,
    Textarea,
    TextInput
} from "@mantine/core";
// import { useForm, zodResolver } from "@mantine/form";

const mapTypeToComponent = {
    text: TextInput,
    textarea: Textarea,
    password: PasswordInput,
    number: NumberInput,
    select: Select,
    multiselect: MultiSelect,
    radio: Radio,
    checkbox: Checkbox,
    segment: SegmentedControl,
}

const SmartForm = forwardRef((props, ref) => {
    const {
        children,
        form,
        setting,
        onSubmit,
        ...rest
    } = props

    // const form = useForm({
    //     validate: zodResolver(schema),
    //     initialValues: initialValues,
    // });

    const submit = (event) => {
        if (onSubmit) {
            onSubmit()
        }
    }

    return (
        <Box sx={{ maxWidth: 600, position: 'relative' }} mx="auto">
            <form onSubmit={(e) => e.preventDefault()} ref={ref}>
                {Object.entries(setting).map(([field, s]) => {
                    const FieldComponent = mapTypeToComponent[s.type];
                    return (
                        <FieldComponent
                            key={field}
                            {...s.props}
                            {...form.getInputProps(field)}
                        />
                    )
                })}
                {children}
            </form>
        </Box>
    )
})

export default SmartForm

SmartForm.propTypes = {
    form: PropTypes.object.isRequired,
    setting: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
}

SmartForm.displayName = 'SmartForm'
