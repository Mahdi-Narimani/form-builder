import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createNewField, reorderFields } from "../store/reducers/fieldes.reducer";
import Field from "./tools/Field";
import { DragDropContext, Droppable, DroppableProvided } from "react-beautiful-dnd";

const MasterForm = () => {
    const fields = useSelector((state: RootState) => state.fields).form.components;
    const dispatch = useDispatch();

    const onDropHandler = (e: React.DragEvent<HTMLElement>) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text");
        const newNode: HTMLElement = document.getElementById(data)!;
        dispatch(createNewField(newNode.id as any));
    };

    const onDragEnd = (result: any) => {
        console.log(result);

        const { destination, source } = result;

        if (!destination) return; // اگر مقصد وجود نداشته باشد، کاری انجام نده

        if (destination.index === source.index) return; // اگر در همان مکان باشد، کاری انجام نده

        // جابجا کردن آیتم‌ها
        dispatch(reorderFields({ sourceIndex: source.index, destinationIndex: destination.index }));
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="drop-list">
                {(provided: DroppableProvided) => (
                    <div
                        className="w-[80%] h-full bg-slate-800 rounded-lg overflow-y-auto overflow-x-hidden px-5 py-2"
                        onDrop={(e) => onDropHandler(e)}
                        onDragOver={(e) => e.preventDefault()}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {fields.map((field, index) => (
                            <Field
                                key={field.id}
                                type={field.type}
                                id={field.id}
                                label={field.label}
                                index={index}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default MasterForm;
