import { FormInitialState } from "../reducers/fieldes.reducer";

const deleteFieldAction = (state: FormInitialState, id: string) => {
    return {
        ...state,
        form: {
            ...state.form,
            components: state.form.components.filter((field) => (field.id !== id ? field : null)),
        },
    };
};

export default deleteFieldAction;
