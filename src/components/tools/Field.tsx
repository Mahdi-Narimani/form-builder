import Checkbox from "./fields/Checkbox";
import Dropdown from "./fields/Dropdown";
import RadioGroup from "./fields/RadioGroup";
import TextField from "./fields/TextField";
import FieldProvider from "./FieldProvider";

const Field = ({ type, id, label, index }: any) => {
    switch (type) {
        case "textfield":
            return (
                <FieldProvider
                    fieldId={id}
                    fieldType={type}
                    index={index}
                >
                    <TextField
                        id={id}
                        label={label}
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
                        label={label}
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
                        label={label}
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
                        label={label}
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
