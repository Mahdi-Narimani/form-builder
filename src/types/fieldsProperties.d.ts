export interface BaseField {
    label: string;
    id: string;
    type: string;
}
export interface TextField extends BaseField {
    type: "textfield";
    placeholder?: string;
    maxLength?: number;
}
export interface CheckboxField extends BaseField {
    type: "checkbox";
    options: string[];
}
export interface RadioGroupField extends BaseField {
    type: "radiogroup";
    options: string[];
}
export interface DropdownField extends BaseField {
    type: "dropdown";
    options: {
        value: string;
        label: string;
    }[];
    multiple?: boolean;
}

export type FormField = TextField | CheckboxField | DropdownField | RadioGroupField;
