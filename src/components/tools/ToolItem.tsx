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
            className="h-9 flex items-center gap-2 text-slate-300 bg-slate-950 p-2 rounded-lg cursor-pointer text-sm hover:border-[1px] border-blue-500 hover:scale-110 transition-all delay-75"
            draggable={true}
            onDragStart={(e) => onDragItemHandler(e)}
        >
            <i className={`fa-solid ${icon}`}></i>
            <p>{label}</p>
        </li>
    );
};

export default ToolItem;
