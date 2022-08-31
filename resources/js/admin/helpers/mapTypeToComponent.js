import {
    Checkbox,
    MultiSelect,
    NumberInput,
    PasswordInput,
    Radio,
    SegmentedControl,
    Select,
    Textarea,
    TextInput
} from "@mantine/core";

export const mapTypeToComponent = {
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
