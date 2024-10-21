interface Props {
    id: string;
    onDragItemHandler: (e: React.DragEvent<HTMLLIElement>) => void;
    icon: string;
    label: string;
}

const ToolItem = ({ id, icon, label, onDragItemHandler }: Props) => {
    return (
        <li
            key={id}
            id={id}
            className="flex items-center gap-2 text-slate-300 bg-slate-950 p-2 rounded-lg cursor-pointer text-sm"
            draggable={true}
            onDragStart={(e) => onDragItemHandler(e)}
        >
            <i className={`fa-solid ${icon}`}></i>
            <p>{label}</p>
        </li>
    );
};

export default ToolItem;
