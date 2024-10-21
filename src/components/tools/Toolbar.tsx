import { useDispatch } from "react-redux";
import { fieldsList } from "../../constants/toolbarList";
import ToolItem from "./ToolItem";
import { restorePreviousForm, saveForm } from "../../store/reducers/fieldes.reducer";

const Toolbar = ({ onVisibleDataJSON }: { onVisibleDataJSON: (arg: boolean) => void }) => {
    const dispatch = useDispatch();
    const restoreState = localStorage.getItem("form1");

    const dragItemHandler = (e: React.DragEvent<HTMLLIElement>) => {
        e.dataTransfer?.setData("text", (e.target as HTMLElement).id);
    };

    const saveFormHandler = () => {
        dispatch(saveForm());
    };

    const restorePreviousFormHandler = () => {
        dispatch(restorePreviousForm(restoreState as any));
    };

    const visibleDataJSONHandler = () => {
        onVisibleDataJSON(true);
    };

    return (
        <div className="w-[20%] h-full flex flex-col justify-between bg-slate-800 rounded-lg p-4">
            <div className="h-full flex flex-col gap-2">
                <h3 className="text-slate-300 font-semibold text-2xl">Fields:</h3>
                <ul className=" grid grid-cols-2 gap-x-2 gap-y-3">
                    {fieldsList.map((field) => (
                        <ToolItem
                            key={field.id}
                            id={field.id}
                            icon={field.icon}
                            label={field.label}
                            onDragItemHandler={dragItemHandler}
                        />
                    ))}
                </ul>
            </div>
            <div className="h-10 flex items-center justify-between">
                <button
                    className="text-slate-300 w-12 py-2 bg-slate-950 rounded-lg font-bold hover:shadow-lg hover:shadow-slate-900 hover:moveUpAnimate hover:border-[1px] border-indigo-500 transition-all"
                    onClick={visibleDataJSONHandler}
                >
                    <i
                        className="fa-solid fa-code
                    text-slate-300"
                    ></i>
                </button>

                <button
                    className="bg-slate-950 text-slate-300 w-20 py-2 rounded-lg font-bold hover:shadow-lg hover:shadow-slate-900 hover:border-[1px] border-green-900 hover:moveUpAnimate transition-all"
                    onClick={saveFormHandler}
                >
                    Save
                </button>

                <button
                    className={` text-slate-300 w-20 py-2 rounded-lg font-bold hover:shadow-lg ${
                        restoreState
                            ? "bg-slate-950 hover:shadow-slate-900 hover:border-[1px] border-yellow-500 hover:moveUpAnimate transition-all"
                            : "bg-slate-500 cursor-not-allowed"
                    }`}
                    onClick={restorePreviousFormHandler}
                    disabled={!restoreState}
                >
                    Restore
                </button>
            </div>
        </div>
    );
};

export default Toolbar;
