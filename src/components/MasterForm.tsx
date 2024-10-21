import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createNewField } from "../store/reducers/fieldes.reducer";
import Field from "./tools/Field";

const MasterForm = () => {
    const fields = useSelector((state: RootState) => state.fields).form.components;
    const dispatch = useDispatch();

    const onDropHandler = (e: React.DragEvent<HTMLElement>) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text");
        const newNode: HTMLElement = document.getElementById(data)!;
        dispatch(createNewField(newNode.id as any));
    };

    return (
        <div
            className="w-[80%] h-full bg-slate-800 rounded-lg overflow-y-auto overflow-x-hidden px-5 py-2"
            onDrop={(e) => onDropHandler(e)}
            onDragOver={(e) => e.preventDefault()}
        >
            {fields?.map((field) => (
                <Field
                    key={field.id}
                    type={field.type}
                    id={field.id}
                    label={field.label}
                />
            ))}
        </div>
    );
};

export default MasterForm;
