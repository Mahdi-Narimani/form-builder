import { FormInitialState } from "../reducers/fieldes.reducer";

const reorderFieldsAction = (state: FormInitialState, payload: any) => {
    const { sourceIndex, destinationIndex }: any = payload;
    const [removed] = state.form.components.splice(sourceIndex, 1);
    console.log(removed);

    state.form.components.splice(destinationIndex, 0, removed);
};

export default reorderFieldsAction;
