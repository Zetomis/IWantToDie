const Search = ({
    searchInput,
    setSearchInput,
}: {
    searchInput: string;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
    return (
        <div className="flex gap-x-4">
            <input
                type="text"
                className="rounded border border-black w-full bg-transparent px-4 py-2 focus:outline-none font-semibold"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
                className="rounded border border-black px-4 py-2 font-semibold"
                onClick={() => setSearchInput("")}
            >
                Clear
            </button>
        </div>
    );
};

export default Search;
