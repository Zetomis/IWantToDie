const InputField = ({
    id,
    labelText,
    placeholder,
    state,
    setState,
}: {
    id: string;
    labelText: string;
    placeholder: string;
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}) => {
    return (
        <div className="flex flex-col gap-y-2 my-4">
            <label htmlFor={id} className="font-semibold text-sm">
                {labelText}:
            </label>
            <input
                type="text"
                id={id}
                placeholder={placeholder}
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full border border-black rounded bg-transparent px-4 py-2 focus:outline-none"
            />
        </div>
    );
};

export default InputField;
