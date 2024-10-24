import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import Highlight from "react-highlight";

import "prismjs/components/prism-json";
import "prismjs/themes/prism-tomorrow.css";
import "../themes/atom-one-dark.min.css";
import { convertDataJsonToForm } from "../store/reducers/fieldes.reducer";
import { useDispatch } from "react-redux";

const FormDataJson = ({ onVisibleDataJSON }: { onVisibleDataJSON: (arg: boolean) => void }) => {
    const formData = useSelector((state: RootState) => state.fields);
    const dispatch = useDispatch();

    const [copied, setCopied] = useState(false);
    const [addData, setAddData] = useState(false);
    const [code, setCode] = useState("");

    const toggleFormMode = () => {
        setAddData((prev) => !prev);
    };

    const copyFormDataJSON = () => {
        navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
        setCopied(true);
    };

    const highlightCode = (code: any) => {
        return Prism.highlight(code, Prism.languages.json, "json");
    };

    const saveNewDataJSON = () => {
        dispatch(convertDataJsonToForm(code as any));
        onVisibleDataJSON(false);
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

            <div className="flex flex-col items-end">
                <div className="flex py-1 gap-2 border-b-[1px] border-slate-600 text-slate-100">
                    <button
                        className={`px-2 py-1 rounded ${!addData ? "bg-slate-300 text-black font-semibold" : ""}`}
                        onClick={toggleFormMode}
                    >
                        current data
                    </button>
                    <button
                        className={`px-2 py-1 rounded ${addData ? "bg-slate-300 text-black font-semibold" : ""}`}
                        onClick={toggleFormMode}
                    >
                        add data
                    </button>
                </div>
                {addData ? (
                    <>
                        <Editor
                            value={code}
                            onValueChange={(newCode) => setCode(newCode)}
                            highlight={highlightCode}
                            padding={10}
                            className="rounded-lg shadow-lg size-[550px] max-h-[550px] bg-[#282C34] visibleFormDataJSON border-none outline-none focus:border-none focus:outline-none"
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 16,
                                backgroundColor: "#2d2d2d",
                                color: "#fff",
                            }}
                        />

                        <button
                            className="mt-1 bg-slate-100 font-semibold px-6 py-1 rounded-lg"
                            onClick={saveNewDataJSON}
                        >
                            Save
                        </button>
                    </>
                ) : (
                    <>
                        <Highlight className="json visibleFormDataJSON rounded-lg shadow-lg size-[550px]">
                            {JSON.stringify(formData, null, 2)}
                        </Highlight>
                        <button
                            className="mt-1 bg-slate-100 font-semibold px-4 py-1 rounded-lg"
                            onClick={copyFormDataJSON}
                            disabled={copied}
                        >
                            {copied ? "Data was copied" : "Copy data"}
                        </button>
                    </>
                )}
            </div>
        </section>
    );
};

export default FormDataJson;
