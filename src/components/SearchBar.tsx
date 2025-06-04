import { useState } from "react";

interface Props {
    onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(input);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
                type="text"
                className="border p-2 rounded w-full bg-gray-200"
                placeholder="Enter GitHub username..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="bg-sky-600 text-white px-4 py-2 rounded w-full sm:w-auto"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
