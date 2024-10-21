import React, { useState } from "react";

import Checkbox from "./fields/Checkbox";
import Dropdown from "./fields/Dropdown";
import RadioGroup from "./fields/RadioGroup";
import TextField from "./fields/TextField";
import { FieldActions } from "./FieldActions";

interface Props {
    type: string;
    id: string;
    label: string;
}

const FieldProvider = ({
    children,
    fieldId,
    fieldType,
}: {
    children: React.ReactNode;
    fieldId: string;
    fieldType: string;
}) => {
    const [visibleFieldAction, setVisibleFieldAction] = useState<boolean>(false);
    // const dragItemHandler = (e: React.DragEvent<HTMLLIElement>) => {
    //     e.dataTransfer?.setData("text", (e.target as HTMLElement).id);
    // };
    return (
        <div
            className="w-full my-4 text-slate-300 border-[1px] border-slate-700 rounded-lg p-2 hover:shadow-md hover:shadow-slate-900 transition-all"
            onMouseOver={() => setVisibleFieldAction(true)}
            onMouseLeave={() => setVisibleFieldAction(false)}
            // draggable
            // onDragStart={(e) => dragItemHandler(e)}
        >
            {visibleFieldAction && (
                <FieldActions
                    fieldId={fieldId}
                    fieldType={fieldType}
                />
            )}
            {children}
        </div>
    );
};

const Field = ({ type, id, label }: Props) => {
    switch (type) {
        case "textfield":
            return (
                <FieldProvider
                    fieldId={id}
                    fieldType={type}
                >
                    <TextField
                        id={id}
                        label={label}
                    />
                </FieldProvider>
            );
            break;

        case "checkbox":
            return (
                <FieldProvider
                    fieldId={id}
                    fieldType={type}
                >
                    <Checkbox
                        id={id}
                        label={label}
                    />
                </FieldProvider>
            );
            break;

        case "radiogroup":
            return (
                <FieldProvider
                    fieldId={id}
                    fieldType={type}
                >
                    <RadioGroup
                        id={id}
                        label={label}
                    />
                </FieldProvider>
            );
            break;

        case "dropdown":
            return (
                <FieldProvider
                    fieldId={id}
                    fieldType={type}
                >
                    <Dropdown
                        id={id}
                        label={label}
                    />
                </FieldProvider>
            );
            break;

        default:
            return null;
            break;
    }
};

export default Field;
