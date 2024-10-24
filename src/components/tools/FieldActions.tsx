import { useDispatch } from "react-redux";
import { createNewField, deleteField } from "../../store/reducers/fieldes.reducer";

export const FieldActions = ({
    fieldId,
    fieldType,
}: {
    fieldId: string;
    fieldType: string;
}) => {
    const dispatch = useDispatch();

    const deleteFieldHandler = (id: string) => {
        dispatch(deleteField(id as any));
    };

    const copyFieldHandler = (type: string) => {
        dispatch(createNewField(type as any));
    };

    return (
        <div className="flex gap-4 justify-end visibleFieldAction">
            <button onClick={() => deleteFieldHandler(fieldId)}>
                <i className="fa-solid fa-trash-can hover:text-red-500 transition-all"></i>
            </button>
            {/* <button>
                <i className="fa-solid fa-pen-to-square hover:text-blue-500 transition-all"></i>
            </button> */}
            <button onClick={() => copyFieldHandler(fieldType)}>
                <i className="fa-solid fa-copy hover:text-green-500 transition-all"></i>
            </button>
            {/* <button
                className="cu text-white rounded hover:text-blue-500"
            >
                <i className="fa-solid fa-arrows-up-down"></i>
            </button> */}
        </div>
    );
};
