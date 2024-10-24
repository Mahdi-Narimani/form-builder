import { checkboxField, dropdownField, radioGroupField, textField } from "../../constants/fieldsProperties";
import { addNewField } from "../../util";
import { FormInitialState } from "../reducers/fieldes.reducer";

const createNewFieldAction = (state: FormInitialState, type: string) => {
    switch (type) {
        case "textfield": {
            return addNewField(state, textField, "textfield");
            break;
        }

        case "checkbox": {
            return addNewField(state, checkboxField, "checkbox");
            break;
        }

        case "radiogroup": {
            return addNewField(state, radioGroupField, "radiogroup");
            break;
        }

        case "dropdown": {
            return addNewField(state, dropdownField, "dropdown");
            break;
        }

        default:
            return state;
    }
};

export default createNewFieldAction;
