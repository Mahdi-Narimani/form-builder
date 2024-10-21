interface Props {
    id: string;
    label: string;
}

const Checkbox = ({ id, label }: Props) => {
    return (
        <div className="flex gap-2 items-center">
            <input
                type="checkbox"
                className="size-4 text-slate-100 focus:ring-2 focus:ring-slate-900 accent-slate-600 shadow-lg rounded"
                id={id}
            />
            <span>{label}</span>
        </div>
    );
};

export default Checkbox;
