import { FormInitialState } from "../store/reducers/fieldes.reducer";

export const addNewField = (state: FormInitialState, fieldObj: any, type: string) => {
    const hasField = state.form.components.some((field) => field.id === fieldObj.id);
    if (!hasField) {
        return {
            ...state,
            form: {
                ...state.form,
                components: state.form.components ? [...state.form.components, fieldObj] : [fieldObj],
            },
        };
    } else {
        const newField = createNextField(state, type, fieldObj);

        return {
            ...state,
            form: {
                ...state.form,
                components: state.form.components ? [...state.form.components, newField] : [newField],
            },
        };
    }
};

export const createNextField = (state: FormInitialState, type: string, fieldObj: any) => {
    // * 1. Getting items that have Type field
    const fieldArray = state.form.components.map((field) => (field.type === type ? field.id : field));

    // * 2. Sort them in ascending order
    const sortArray: any = fieldArray?.sort();

    // * 3. Getting the index of the last field item
    const lastItem: string = sortArray?.at(-1);
    const findNumberRegex: RegExp = /\d+/g;
    const findLastId: number = Number(lastItem.match(findNumberRegex));
    const newId = findLastId + 1;

    // * 4. Creating a new item based on the last item in the components
    const newField = {
        ...fieldObj,
        id: `${type}${newId}`,
    };

    return newField;
};
