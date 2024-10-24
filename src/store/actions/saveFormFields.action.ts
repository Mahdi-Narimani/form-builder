import { FormInitialState } from "../reducers/fieldes.reducer";

const saveFormFields = (state: FormInitialState) => {
    if (state.form.components.length !== 0) {
        localStorage.setItem(state.form.name, JSON.stringify(state));
    } else {
        alert("There is no field in the form");
    }
};
export default saveFormFields;
