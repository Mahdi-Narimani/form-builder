import Checkbox from "./fields/Checkbox";
import Dropdown from "./fields/Dropdown";
import RadioGroup from "./fields/RadioGroup";
import Text from "./fields/TextField";
import FieldProvider from "./FieldProvider";
import { FormField } from "../../types/fieldsProperties";

interface FieldProps {
    index: number;
    field: any;
}

const Field = ({ type, index, id, label, field }: FieldProps & FormField) => {
    switch (type) {
        case "textfield":
            return (
                <FieldProvider
                    fieldId={id}
                    fieldType={type}
                    index={index}
                >
                    <Text
                        id={id}
                        type={type}
                        label={label}
                        maxLength={field.maxLength}
                        placeholder={field.placeholder}
                    />
                </FieldProvider>
            );
            break;

        case "checkbox":
            return (
                <FieldProvider
                    fieldId={id}
                    fieldType={type}
                    index={index}
                >
                    <Checkbox
                        id={id}
                        type={type}
                        label={label}
                        options={field.options}
                    />
                </FieldProvider>
            );
            break;

        case "dropdown":
            return (
                <FieldProvider
                    fieldId={id}
                    fieldType={type}
                    index={index}
                >
                    <Dropdown
                        id={id}
                        type={type}
                        label={label}
                        options={field.options}
                        multiple={field.multiple}
                    />
                </FieldProvider>
            );
            break;

        case "radiogroup":
            return (
                <FieldProvider
                    fieldId={id}
                    fieldType={type}
                    index={index}
                >
                    <RadioGroup
                        id={id}
                        type={type}
                        label={label}
                        options={field.options}
                    />
                </FieldProvider>
            );
            break;

        default:
            return null;
            break;
    }
};

export default Field;
