import { useState } from "react";
import { FieldActions } from "./FieldActions";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";

const FieldProvider = ({
    children,
    fieldId,
    fieldType,
    index,
}: {
    children: React.ReactNode;
    fieldId: string;
    fieldType: string;
    index: number;
}) => {
    const [visibleFieldAction, setVisibleFieldAction] = useState<boolean>(false);

    return (
        <Draggable
            draggableId={fieldId}
            index={index}
        >
            {(provided: DraggableProvided) => (
                <div
                    className="w-full my-4 text-slate-300 border-[1px] border-slate-700 rounded-lg p-2 hover:shadow-md hover:shadow-slate-900 transition-all"
                    onMouseOver={() => setVisibleFieldAction(true)}
                    onMouseLeave={() => setVisibleFieldAction(false)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {visibleFieldAction && (
                        <FieldActions
                            fieldId={fieldId}
                            fieldType={fieldType}
                        />
                    )}
                    {children}
                </div>
            )}
        </Draggable>
    );
};

export default FieldProvider;
