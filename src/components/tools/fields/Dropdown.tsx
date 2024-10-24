import { DropdownField } from "../../../types/fieldsProperties";

const Dropdown = ({ id, label, options, multiple }: DropdownField) => {
    return (
        <div className="flex flex-col items-start gap-1">
            <label htmlFor={id}>{label}</label>
            <select
                name={id}
                id={id}
                className="w-[15%] bg-slate-700 py-2 px-4 rounded-lg focus:border-none focus:outline-none"
                multiple={multiple}
            >
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
