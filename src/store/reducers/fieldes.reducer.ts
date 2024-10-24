import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import createNewFieldAction from "../actions/createNewField.action";
import deleteFieldAction from "../actions/deleteField.action";
import saveFormFields from "../actions/saveFormFields.action";
import reorderFieldsAction from "../actions/reorderFields.action";

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
        reorderFields: (state: FormInitialState, action: PayloadAction) => {
            return reorderFieldsAction(state, action.payload);
        },
        createNewField: (state: FormInitialState, action: PayloadAction) => {
            return createNewFieldAction(state, action.payload as any);
        },
        deleteField: (state: FormInitialState, action: PayloadAction) => {
            return deleteFieldAction(state, action.payload as any);
        },
        saveForm: (state: FormInitialState) => {
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
