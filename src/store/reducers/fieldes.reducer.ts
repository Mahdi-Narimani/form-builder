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
        reorderFields: (state, action) => {
            const { sourceIndex, destinationIndex } = action.payload;
            const [removed] = state.form.components.splice(sourceIndex, 1);
            state.form.components.splice(destinationIndex, 0, removed);
        },
        createNewField: (state, action: PayloadAction) => {
            return createNewFieldAction(state, action.payload);
        },
        deleteField: (state, action: PayloadAction) => {
            return deleteFieldAction(state, action.payload as any);
        },
        saveForm: (state) => {
            return saveFormFields(state);
        },
        restorePreviousForm: (_, action: PayloadAction) => {
            const previousState = JSON.parse(action.payload as any);
            return previousState;
        },
        convertDataJsonToForm: (_, action: PayloadAction) => {
            const newDataObject = JSON.parse(action.payload as any);
            return newDataObject;
        },
    },
});

export const { createNewField, deleteField, saveForm, restorePreviousForm, convertDataJsonToForm, reorderFields } =
    fieldsSlice.actions;
export default fieldsSlice.reducer;
