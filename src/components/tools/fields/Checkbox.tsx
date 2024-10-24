import { CheckboxField } from "../../../types/fieldsProperties";

const Checkbox = ({ id, type, label, options }: CheckboxField) => {
    return (
        <div
            id={id}
            className="flex flex-col gap-2"
        >
            <p>{label}</p>
            {options.map((option: string) => (
                <label
                    key={option}
                    htmlFor={option}
                    className="flex items-center gap-2"
                >
                    <input
                        type={type}
                        name={option}
                        value={option}
                        className="size-4 text-slate-100 focus:ring-2 focus:ring-slate-900 accent-slate-600 shadow-lg rounded"
                    />
                    <span className="capitalize">{option}</span>
                </label>
            ))}
        </div>
    );
};

export default Checkbox;
