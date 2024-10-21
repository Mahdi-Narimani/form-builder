import Highlight from "react-highlight";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

import "../themes/atom-one-dark.min.css";
import { useState } from "react";
const FormDataJson = ({ onVisibleDataJSON }: { onVisibleDataJSON: (arg: boolean) => void }) => {
    const formData = useSelector((state: RootState) => state.fields);
    const [copied, setCopied] = useState(false);

    const copyFormDataJSON = () => {
        navigator.clipboard.writeText(JSON.stringify(formData));
        setCopied(true);
    };

    return (
        <section className="fixed top-0 left-0 right-0 bottom-0 bg-slate-900/50 flex justify-center items-center">
            <button
                className="absolute top-5 right-5 text-red-500"
                onClick={() => {
                    onVisibleDataJSON(false);
                }}
            >
                <i className="fa-solid fa-xmark text-4xl"></i>
            </button>
            <button
                className="absolute top-5 right-[30%] bg-slate-100 font-semibold px-4 py-1 rounded-lg"
                onClick={copyFormDataJSON}
                disabled={copied}
            >
                {copied ? "Data was copied" : "Copy data"}
            </button>
            <Highlight className="json visibleFormDataJSON rounded-lg shadow-lg size-[600px]">
                {JSON.stringify(formData, null, 2)}
            </Highlight>
        </section>
    );
};

export default FormDataJson;
