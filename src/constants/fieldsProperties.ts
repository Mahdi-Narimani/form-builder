import { CheckboxField, DropdownField, RadioGroupField, TextField } from "../types/fieldsProperties";

export const textField: TextField = {
    label: "Text Field",
    id: "textField1",
    type: "textfield",
    placeholder: "enter you text",
    maxLength: 1000,
};

export const checkboxField: CheckboxField = {
    label: "Checkbox",
    id: "checkbox1",
    type: "checkbox",
    options: ["checkbox1", "checkbox2", "checkbox3"],
};

export const dropdownField: DropdownField = {
    label: "Dropdown",
    id: "dropdown1",
    type: "dropdown",
    options: [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
    ],
    multiple: false,
};

export const radioGroupField: RadioGroupField = {
    label: "Radio Group",
    id: "radioGroup1",
    type: "radiogroup",
    options: ["radio-1", "radio-2", "radio-3"],
};
