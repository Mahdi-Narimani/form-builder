interface Props {
    id: string;
    label: string;
}

const TextField = ({ id, label }: Props) => {
    return (
        <>
            <p>{label}</p>
            <input
                id={id}
                type="text"
                className="w-full bg-slate-700 p-2 text-slate-300 focus:outline-none focus:border-none rounded-lg shadow-lg"
            />
        </>
    );
};

export default TextField;
