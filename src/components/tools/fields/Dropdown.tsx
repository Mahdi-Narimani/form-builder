interface Props {
    id: string;
    label: string;
}

const Dropdown = ({ id, label }: Props) => {
    return (
        <div className="flex flex-col items-start gap-1">
            <p>{label}</p>
            <select
                id={id}
                className="w-[15%] bg-slate-700 py-2 px-4 rounded-lg focus:border-none focus:outline-none"
            >
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
        </div>
    );
};

export default Dropdown;
