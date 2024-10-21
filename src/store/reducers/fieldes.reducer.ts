import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import createNewFieldAction from "../actions/createNewField.action";
import deleteFieldAction from "../actions/deleteField.action";
import saveFormFields from "../actions/saveFormFields.action";

export interface FormInitialState {
    form: {
        id: string;
        name: string;
        components: {
            label: string;
            id: string;
            type: string;
        }[];
    };
}

const initialState: FormInitialState = {
    form: {
        id: crypto.randomUUID(),
        name: "form1",
        components: [],
    },
};

export const fieldsSlice = createSlice({
    name: "fields",
    initialState,
    reducers: {
        createNewField: (state, action: PayloadAction) => {
            return createNewFieldAction(state, action.payload);
        },
        deleteField: (state, action: PayloadAction) => {
            return deleteFieldAction(state, action.payload as any);
        },
        saveForm: (state) => {
            return saveFormFields(state);
        },
        restorePreviousForm: (state, action: PayloadAction) => {
            const previousState = JSON.parse(action.payload as any);
            return previousState;
        },
    },
});

export const { createNewField, deleteField, saveForm, restorePreviousForm } = fieldsSlice.actions;
export default fieldsSlice.reducer;
