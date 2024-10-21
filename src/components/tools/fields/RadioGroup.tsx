interface Props {
    id: string;
    label: string;
}

const RadioGroup = ({ id, label }: Props) => {
    return (
        <div
            id={id}
            className="flex items-start flex-col gap-4"
        >
            <p>{label}</p>
            <input
                type="radio"
                name={id}
                className="accent-slate-600"
            />
            <input
                type="radio"
                name={id}
                className="accent-slate-600"
            />
            <input
                type="radio"
                name={id}
                className="accent-slate-600"
            />
        </div>
    );
};

export default RadioGroup;
