import { TextField } from "../../../types/fieldsProperties";

const Text = ({ id, label, maxLength, placeholder }: TextField) => {
    return (
        <>
            <p>{label}</p>
            <input
                id={id}
                type="text"
                placeholder={placeholder}
                className="w-full bg-slate-700 p-2 text-slate-300 focus:outline-none focus:border-none rounded-lg shadow-lg"
                maxLength={maxLength}
            />
        </>
    );
};

export default Text;
